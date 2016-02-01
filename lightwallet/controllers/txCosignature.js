'use strict';

define([
    'definitions',
    'jquery',
    'utils/Address',
    'utils/CryptoHelpers',

    'filters/filters',
    'services/Transactions'
], function(angular, $, Address, CryptoHelpers) {
    var mod = angular.module('walletApp.controllers');

    mod.controller('TxCosignatureCtrl',
        ["$scope", "$window", "$timeout", "Transactions", 'walletScope', 'parent', 'meta',
        function($scope, $window, $timeout, Transactions, walletScope, parent, meta) {
            $scope.walletScope = walletScope;
            $scope.storage = $window.localStorage;
            $scope.storage.setDefault('txCosignDefaults', {});

            // load data from storage
            $scope.common = {
                'requiresKey': $scope.walletScope.sessionData.getRememberedKey() === undefined,
                'password': '',
                'privatekey': '',
            };
            $scope.txCosignData = {
                'fee': $scope.storage.getObject('txCosignDefaults').fee || 0,
                'due': $scope.storage.getObject('txCosignDefaults').due || 60,
                'multisigAccount': parent.otherTrans.signer, // inner tx signer is a multisig account
                'multisigAccountAddress': Address.toAddress(parent.otherTrans.signer, $scope.walletScope.networkId),
                'hash': meta.innerHash.data, // hash of an inner tx is needed
            };

            $scope.$watchGroup(['common.password', 'common.privatekey'], function(nv,ov){
                $scope.invalidKeyOrPassword = false;
            });

            $scope.okPressed = false;
            $scope.ok = function txCosignOk() {
                $scope.okPressed = true;
                $timeout(function txCosignDeferred(){
                    $scope._ok();
                    $scope.okPressed = false;
                });
            };
            $scope._ok = function txCosign_Ok() {
                // save most recent data
                var orig = $scope.storage.getObject('txCosignDefaults')
                $.extend(orig, {
                    'fee':$scope.txCosignData.fee,
                    'due':$scope.txCosignData.due
                });
                $scope.storage.setObject('txCosignDefaults', orig);

                var rememberedKey = $scope.walletScope.sessionData.getRememberedKey();
                if (rememberedKey) {
                    $scope.common.privatekey = CryptoHelpers.decrypt(rememberedKey);
                } else {
                    if (! CryptoHelpers.passwordToPrivatekey($scope.common, $scope.walletScope.networkId, $scope.walletScope.walletAccount) ) {
                        $scope.invalidKeyOrPassword = true;
                        return;
                    }
                }
                Transactions.prepareSignature($scope.common, $scope.txCosignData, $scope.walletScope.nisPort,
                    function(data) {
                        if (data.status === 200) {
                            if (data.data.code >= 2) {
                                alert('failed when trying to send tx: ' + data.data.message);
                            } else {
                                $scope.$close();
                            }
                        }
                        if (rememberedKey) { delete $scope.common.privatekey; }
                    },
                    function(operation, data) {
                        // will do for now, will change it to modal later
                        alert('failed at '+operation + " " + data.data.error + " " + data.data.message);
                        if (rememberedKey) { delete $scope.common.privatekey; }
                    }
                );
            }; // $scope._ok

            $scope.cancel = function () {
                $scope.$dismiss();
            };
        }
    ]);
});
