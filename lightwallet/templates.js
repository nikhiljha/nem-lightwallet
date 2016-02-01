'use strict';
define([
    'definitions'
], function(angular) {
      angular.module('walletApp').run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('views/detailsMosaicDefinition.html',
    '<div class="row">\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Sender</div>\n' +
    '        <div class="col-sm-10">{{tx.signer | fmtPubToAddress:networkId  | fmtAddress}}</div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Mosaic</div>\n' +
    '        <div class="col-sm-10">\n' +
    '            {{tx.mosaicDefinition.id.namespaceId}}:<strong>{{tx.mosaicDefinition.id.name}}</strong>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Mosaic description</div>\n' +
    '        <div class="col-sm-10">{{tx.mosaicDefinition.description}}</div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-12">Mosaic properties</div>\n' +
    '    </div>\n' +
    '    <div class="row" ng-repeat="prop in tx.mosaicDefinition.properties">\n' +
    '        <div class="col-sm-1">&nbsp;</div>\n' +
    '        <div class="col-sm-2">{{prop.name}}</div>\n' +
    '        <div class="col-sm-9">{{prop.value}}</div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-show="tx.mosaicDefinition.levy.mosaicId">\n' +
    '        <div class="row">\n' +
    '            <div class="col-sm-12">Levy data</div>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '            <div class="col-sm-1">&nbsp;</div>\n' +
    '            <div class="col-sm-2">Levy mosaic</div>\n' +
    '            <div class="col-sm-9"><span class="text-muted">{{tx.mosaicDefinition.levy.mosaicId.namespaceId}}</span>:{{tx.mosaicDefinition.levy.mosaicId.name}}</div>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '            <div class="col-sm-1">&nbsp;</div>\n' +
    '            <div class="col-sm-2">Levy account</div>\n' +
    '            <div class="col-sm-9">{{tx.mosaicDefinition.levy.recipient | fmtAddress}}</div>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '            <div class="col-sm-1">&nbsp;</div>\n' +
    '            <div class="col-sm-2">Levy fee</div>\n' +
    '            <div class="col-sm-9">\n' +
    '                <span ng-show="tx.mosaicDefinition.levy.type === 1">constant</span>\n' +
    '                <span ng-show="tx.mosaicDefinition.levy.type === 2">percentage-based</span>\n' +
    '                {{tx.mosaicDefinition.levy.fee}}\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Fee</div>\n' +
    '        <div class="col-sm-10">\n' +
    '            {{(tx.fee | fmtNemValue)[0]}}.<span class="text-muted">{{(tx.fee | fmtNemValue)[1]}} XEM</span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Mosaic fee sink</div>\n' +
    '        <div class="col-sm-10">{{tx.creationFeeSink | fmtAddress}}</div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Mosaic fee</div>\n' +
    '        <div class="col-sm-10">\n' +
    '            {{(tx.creationFee | fmtNemValue)[0]}}.<span class="text-muted">{{(tx.creationFee | fmtNemValue)[1]}} XEM</span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Timestamp</div>\n' +
    '        <div class="col-sm-10">\n' +
    '            {{tx.timeStamp | fmtNemDate}}, <span class="text-muted">deadline {{tx.deadline | fmtNemDate}}</span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Hash</div>\n' +
    '        <div class="col-sm-10">\n' +
    '            <span ng-hide="parent"><tt>{{meta.hash.data}}</tt></span>\n' +
    '            <span ng-show="parent"><tt>{{meta.innerHash.data}}</tt></span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!-- signature is empty if this is inner tx of multisig tx -->\n' +
    '    <!--\n' +
    '    <div ng-class="row" ng-hide="parent">\n' +
    '        <div class="col-sm-2"><span class="text-muted">Signature</span></div>\n' +
    '        <div class="col-sm-10"><span class="text-muted"><tt>{{tx.signature}}</tt></span></div>\n' +
    '    </div>\n' +
    '    -->\n' +
    '</div>');
  $templateCache.put('views/detailsMosaicSupply.html',
    '<div class="row">\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Sender</div>\n' +
    '        <div class="col-sm-10">{{tx.signer | fmtPubToAddress:networkId | fmtAddress}}</div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Mosaic</div>\n' +
    '        <div class="col-sm-10">\n' +
    '            {{tx.mosaicId.namespaceId}}:<strong>{{tx.mosaicId.name}}</strong>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Supply change</div>\n' +
    '        <div class="col-sm-10">\n' +
    '            <span ng-show="tx.supplyType === 1">Create</span>\n' +
    '            <span ng-show="tx.supplyType === 2">Delete</span>\n' +
    '            <strong>{{tx.delta}}</strong>\n' +
    '            <span class="text-muted">.{{(0 | fmtSupply:tx.mosaicId:mosaicDefinitionMetaDataPair)[1]}}</span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Current supply</div>\n' +
    '        <div class="col-sm-10">\n' +
    '            <strong>{{mosaicDefinitionMetaDataPair[mosaicIdToName(tx.mosaicId)].supply}}</strong>\n' +
    '            <span class="text-muted">.{{(0 | fmtSupply:tx.mosaicId:mosaicDefinitionMetaDataPair)[1]}}</span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Fee</div>\n' +
    '        <div class="col-sm-10">\n' +
    '            {{(tx.fee | fmtNemValue)[0]}}.<span class="text-muted">{{(tx.fee | fmtNemValue)[1]}} XEM</span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Timestamp</div>\n' +
    '        <div class="col-sm-10">\n' +
    '            {{tx.timeStamp | fmtNemDate}}, <span class="text-muted">deadline {{tx.deadline | fmtNemDate}}</span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Hash</div>\n' +
    '        <div class="col-sm-10">\n' +
    '            <span ng-hide="parent"><tt>{{meta.hash.data}}</tt></span>\n' +
    '            <span ng-show="parent"><tt>{{meta.innerHash.data}}</tt></span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!-- signature is empty if this is inner tx of multisig tx -->\n' +
    '    <!--\n' +
    '    <div ng-class="row" ng-hide="parent">\n' +
    '        <div class="col-sm-2"><span class="text-muted">Signature</span></div>\n' +
    '        <div class="col-sm-10"><span class="text-muted"><tt>{{tx.signature}}</tt></span></div>\n' +
    '    </div>\n' +
    '    -->\n' +
    '</div>');
  $templateCache.put('views/detailsProvisionNamespace.html',
    '<div class="row">\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Sender</div>\n' +
    '        <div class="col-sm-10">{{tx.signer | fmtPubToAddress:networkId | fmtAddress}}</div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Namespace</div>\n' +
    '        <div class="col-sm-10">\n' +
    '            <span ng-show="tx.parent">{{tx.parent}}.</span><strong>{{tx.newPart}}</strong>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Fee</div>\n' +
    '        <div class="col-sm-10">\n' +
    '            {{(tx.fee | fmtNemValue)[0]}}.<span class="text-muted">{{(tx.fee | fmtNemValue)[1]}} XEM</span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Rental fee sink</div>\n' +
    '        <div class="col-sm-10">{{tx.rentalFeeSink | fmtAddress}}</div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Rental fee</div>\n' +
    '        <div class="col-sm-10">\n' +
    '            {{(tx.rentalFee | fmtNemValue)[0]}}.<span class="text-muted">{{(tx.rentalFee | fmtNemValue)[1]}} XEM</span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Timestamp</div>\n' +
    '        <div class="col-sm-10">\n' +
    '            {{tx.timeStamp | fmtNemDate}}, <span class="text-muted">deadline {{tx.deadline | fmtNemDate}}</span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Hash</div>\n' +
    '        <div class="col-sm-10">\n' +
    '            <span ng-hide="parent"><tt>{{meta.hash.data}}</tt></span>\n' +
    '            <span ng-show="parent"><tt>{{meta.innerHash.data}}</tt></span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!-- signature is empty if this is inner tx of multisig tx -->\n' +
    '    <!--\n' +
    '    <div ng-class="row" ng-hide="parent">\n' +
    '        <div class="col-sm-2"><span class="text-muted">Signature</span></div>\n' +
    '        <div class="col-sm-10"><span class="text-muted"><tt>{{tx.signature}}</tt></span></div>\n' +
    '    </div>\n' +
    '    -->\n' +
    '</div>');
  $templateCache.put('views/detailsTransfer.html',
    '<div class="row">\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Sender</div>\n' +
    '        <div class="col-sm-10">{{tx.signer | fmtPubToAddress:networkId | fmtAddress}}</div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Recipient</div>\n' +
    '        <div class="col-sm-10">{{tx.recipient | fmtAddress}}</div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">\n' +
    '            <span ng-show="tx.mosaics">Multiplier</span>\n' +
    '            <span ng-hide="tx.mosaics">Amount</span>\n' +
    '        </div>\n' +
    '        <div class="col-sm-10">\n' +
    '            <span ng-show="tx.mosaics">\n' +
    '                x<strong>{{(tx.amount | fmtNemValue)[0]}}</strong>\n' +
    '            </span>\n' +
    '            <span ng-hide="tx.mosaics">\n' +
    '                <strong>{{(tx.amount | fmtNemValue)[0]}}</strong>.<span class="text-muted">{{(tx.amount | fmtNemValue)[1]}}</span> XEM\n' +
    '            </span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Fee</div>\n' +
    '        <div class="col-sm-10">\n' +
    '            {{(tx.fee | fmtNemValue)[0]}}.<span class="text-muted">{{(tx.fee | fmtNemValue)[1]}} XEM</span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Timestamp</div>\n' +
    '        <div class="col-sm-10">\n' +
    '            {{tx.timeStamp | fmtNemDate}}, <span class="text-muted">deadline {{tx.deadline | fmtNemDate}}</span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-show="tx.message" class="row">\n' +
    '        <div class="col-sm-2">Message</div>\n' +
    '        <div class="col-sm-10">\n' +
    '            <span ng-show="tx.message.type === 1" class="text-primary">{{tx.message | fmtHexMessage}}</span>\n' +
    '            <span ng-show="tx.message.type === 2">Encrypted\n' +
    '                <span ng-show="requiresKey">\n' +
    '                    <button type="submit" class="btn btn-info" ng-click="decode(tx)">decode</button>\n' +
    '                </span>\n' +
    '                <div ng-show="!requiresKey" class="text-primary">\n' +
    '                    <span ng-show="gettingRecipientInfo"><span class="glyphicon glyphicon-refresh spinning"></span></span>\n' +
    '                    {{decoded | fmtHexMessage}}\n' +
    '                </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-2">Hash</div>\n' +
    '        <div class="col-sm-10">\n' +
    '            <span ng-hide="parent"><tt>{{meta.hash.data}}</tt></span>\n' +
    '            <span ng-show="parent"><tt>{{meta.innerHash.data}}</tt></span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!-- signature is empty if this is inner tx of multisig tx -->\n' +
    '    <!--\n' +
    '    <div ng-class="row" ng-hide="parent">\n' +
    '        <div class="col-sm-2"><span class="text-muted">Signature</span></div>\n' +
    '        <div class="col-sm-10"><span class="text-muted"><tt>{{tx.signature}}</tt></span></div>\n' +
    '    </div>\n' +
    '    -->\n' +
    '\n' +
    '    <div class="row" ng-show="tx.mosaics">\n' +
    '        <div class="col-sm-12"><strong>Mosaics attached</strong> {{tx.mosaics.length}} <span class="glyphicon glyphicon-globe text-info"></span></div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-repeat="mos in tx.mosaics">\n' +
    '        <div class="row">\n' +
    '            <div class="col-sm-1">&nbsp;</div>\n' +
    '            <div class="col-sm-2">Name</div>\n' +
    '            <div class="col-sm-9"><span class="text-muted">{{mos.mosaicId.namespaceId}}</span>:{{mos.mosaicId.name}}</div>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '            <div class="col-sm-1">&nbsp;</div>\n' +
    '            <div class="col-sm-2">Quantity</div>\n' +
    '            <div class="col-sm-9"><strong>{{(mos.quantity | fmtSupply:mos.mosaicId:mosaicDefinitionMetaDataPair)[0]}}</strong><span class="text-muted">.{{(mos.quantity | fmtSupply:mos.mosaicId:mosaicDefinitionMetaDataPair)[1]}}</span></div>\n' +
    '        </div>\n' +
    '\n' +
    '        <taglevy mos="mos" tx="tx" mosaics="mosaicDefinitionMetaDataPair">\n' +
    '            <div class="row" ng-show="levy.type">\n' +
    '                <div class="col-sm-1">&nbsp;</div>\n' +
    '                <div class="col-sm-2"><strong>Levy</strong></div>\n' +
    '                <div class="col-sm-9">\n' +
    '                    <span ng-show="levy.type === 1">constant:</span>\n' +
    '                    <span ng-show="levy.type === 2">percentage-based:</span>\n' +
    '                    <strong>{{mos | fmtLevyFee:tx.amount:levy:mosaics}}</strong>\n' +
    '                    <span class="text-muted">{{levy.mosaicId.namespaceId}}</span>:{{levy.mosaicId.name}}\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </taglevy>\n' +
    '    </div>\n' +
    '</div>');
  $templateCache.put('views/dialogPassword.html',
    '<div class="modal-header">\n' +
    '    <h3 class="modal-title">Wallet Password</h3>\n' +
    '</div>\n' +
    '<div class="modal-body" style="padding-left:30px; padding-right:30px;">\n' +
    '    <div ng-hide="account.brain" class="form-group" ng-class="{\'has-error\':privatekey.length===0 || invalidKeyOrPassword}">\n' +
    '        <label for="privatekey" class="control-label">Private Key for: {{account.address | fmtAddress}}</label>\n' +
    '        <input type="password" class="form-control" ng-model="privatekey" id="privatekey" placeholder="" ng-keyup="$event.keyCode == 13 && ok()">\n' +
    '        <span ng-show="invalidKeyOrPassword" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign">Key does not correspond to the account</span></span>\n' +
    '    </div>\n' +
    '    <div ng-show="account.brain" class="form-group" ng-class="{\'has-error\':password.length===0 || invalidKeyOrPassword}">\n' +
    '        <label for="password" class="control-label">Password for: {{account.address | fmtAddress}}</label>\n' +
    '        <input autofocus="autofocus" type="password" class="form-control" ng-model="password" id="password" placeholder="" ng-keyup="$event.keyCode == 13 && ok()">\n' +
    '        <span ng-show="invalidKeyOrPassword" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign"></span>Invalid password.</span>\n' +
    '    </div>\n' +
    '\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '    <span ng-show="invalidKeyOrPassword" class="text-danger glyphicon glyphicon-exclamation-sign"></span>\n' +
    '    <button class="btn btn-primary" type="button" ng-click="ok()">\n' +
    '        <span ng-show="generatingInProgress"><span class="glyphicon glyphicon-refresh spinning"></span></span>\n' +
    '        {{okButtonLabel}}</button>\n' +
    '    <button class="btn btn-warning" type="button" ng-click="cancel()">Cancel</button>\n' +
    '</div>\n' +
    '');
  $templateCache.put('views/dialogWarning.html',
    '<div class="modal-header">\n' +
    '    <h3 class="modal-title">Warning</h3>\n' +
    '</div>\n' +
    '<div class="modal-body" style="padding-left:30px; padding-right:30px;">\n' +
    '    {{warningMsg}}\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '    <button class="btn btn-primary" type="button" ng-click="$dismiss()">Close</button>\n' +
    '</div>');
  $templateCache.put('views/lineImportanceTransfer.html',
    '<table class="table table-condensed" data-toggle="tooltip" data-placement="{{tooltipPosition}}" title="Importance Transfer Transaction">\n' +
    '    <tr ng-show="parent">\n' +
    '        <td colspan="4">multisig issuer <tt>{{parent.signer | fmtPubToAddress | fmtAddress}}</tt></td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '        <td><span class="glyphicon glyphicon-open text-info"></span> <tt>{{tx.signer | fmtPubToAddress:networkId | fmtAddress}}</tt></td>\n' +
    '        <td><strong>{{tx.mode | fmtImportanceTransferMode}}</strong></td>\n' +
    '        <td rowspan="2"><span ng-show="confirmed">h: {{meta.height}}</span></td>\n' +
    '        <td>{{tx.timeStamp | fmtNemDate}}</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '        <td><tt ng-show="tx.mode === 1"><strong>{{tx.remoteAccount | fmtPubToAddress:networkId | fmtAddress}}</strong></tt></td>\n' +
    '        <td>fee: {{(tx.fee | fmtNemValue)[0]}}.<span class="text-muted">{{(tx.fee | fmtNemValue)[1]}}</span></td>\n' +
    '        <td><span class="text-muted">{{tx.deadline | fmtNemDate}}</span></td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '        <td colspan="4"><span ng-show="parent"><strong>Multisig</strong></span> hash: <tt>{{meta.hash.data}}</tt></td>\n' +
    '    </tr>\n' +
    '</table>');
  $templateCache.put('views/lineMosaicDefinition.html',
    '<table class="table table-condensed" data-toggle="tooltip" data-placement="{{tooltipPosition}}" title="Mosaic Definition Creation Transaction" style="cursor:pointer" ng-click="displayTransactionDetails(parent, tx, meta)">\n' +
    '    <tr ng-show="parent">\n' +
    '        <td colspan="4">multisig issuer <tt>{{parent.signer | fmtPubToAddress:networkId | fmtAddress}}</tt>\n' +
    '            <button ng-show="needsSignature" ng-click="cosignCallback(parent, tx, meta)" type="button" class="btn btn-primary"><span class="glyphicon glyphicon-send"></span> COSIGN</button></td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '        <td><span class="glyphicon glyphicon-globe text-info"></span> <tt>{{tx.signer | fmtPubToAddress:networkId | fmtAddress}}</tt></td>\n' +
    '        <td>creation fee: <strong>{{(tx.creationFee | fmtNemValue)[0]}}</strong>.<span class="text-muted">{{(tx.creationFee | fmtNemValue)[1]}}</span> XEM</td>\n' +
    '        <td rowspan="2"><span ng-show="confirmed">h: {{meta.height}}</span></td>\n' +
    '        <td>{{tx.timeStamp | fmtNemDate}}</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '        <td><span class="text-muted">{{tx.mosaicDefinition.id.namespaceId}}</span>:<strong>{{tx.mosaicDefinition.id.name}}</strong></td>\n' +
    '        <td>fee: {{(tx.fee | fmtNemValue)[0]}}.<span class="text-muted">{{(tx.fee | fmtNemValue)[1]}}</span></td>\n' +
    '        <td><span class="text-muted">{{tx.deadline | fmtNemDate}}</span></td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '        <td colspan="4"><span ng-show="parent"><strong>Multisig</strong></span> hash: <tt>{{meta.hash.data}}</tt></td>\n' +
    '    </tr>\n' +
    '</table>');
  $templateCache.put('views/lineMosaicSupply.html',
    '<table class="table table-condensed" data-toggle="tooltip" data-placement="{{tooltipPosition}}" title="Mosaic Supply Change Transaction" style="cursor:pointer" ng-click="displayTransactionDetails(parent, tx, meta)">\n' +
    '    <tr ng-show="parent">\n' +
    '        <td colspan="4">multisig issuer <tt>{{parent.signer | fmtPubToAddress:networkId | fmtAddress}}</tt>\n' +
    '            <button ng-show="needsSignature" ng-click="cosignCallback(parent, tx, meta)" type="button" class="btn btn-primary"><span class="glyphicon glyphicon-send"></span> COSIGN</button></td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '        <td><span class="glyphicon glyphicon-asterisk text-info"></span> <tt>{{tx.signer | fmtPubToAddress:networkId | fmtAddress}}</tt></td>\n' +
    '        <td></td>\n' +
    '        <td rowspan="2"><span ng-show="confirmed">h: {{meta.height}}</span></td>\n' +
    '        <td>{{tx.timeStamp | fmtNemDate}}</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '        <td><span class="text-muted">{{tx.mosaicId.namespaceId}}</span>:<strong>{{tx.mosaicId.name}}</strong></td>\n' +
    '        <td>fee: {{(tx.fee | fmtNemValue)[0]}}.<span class="text-muted">{{(tx.fee | fmtNemValue)[1]}}</span></td>\n' +
    '        <td><span class="text-muted">{{tx.deadline | fmtNemDate}}</span></td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '        <td colspan="4"><span ng-show="parent"><strong>Multisig</strong></span> hash: <tt>{{meta.hash.data}}</tt></td>\n' +
    '    </tr>\n' +
    '</table>');
  $templateCache.put('views/lineMultisigModification.html',
    '<table class="table table-condensed" data-toggle="tooltip" data-placement="{{tooltipPosition}}" title="Aggregate Modification Transaction">\n' +
    '    <tr ng-show="parent">\n' +
    '        <td colspan="4">multisig issuer <tt>{{parent.signer | fmtPubToAddress:networkId | fmtAddress}}</tt></td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '        <td><span class="glyphicon glyphicon-star-empty text-info"></span> <tt>{{tx.signer | fmtPubToAddress:networkId | fmtAddress}}</tt></td>\n' +
    '        <td></td>\n' +
    '        <td rowspan="2"><span ng-show="confirmed">h: {{meta.height}}</span></td>\n' +
    '        <td>{{tx.timeStamp | fmtNemDate}}</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '        <td>Modifications: {{tx.modifications.length}}<span ng-show="tx.minCosignatories">, relative min cosignatories change: {{tx.minCosignatories.relativeChange}}</span></td>\n' +
    '        <td>fee: {{(tx.fee | fmtNemValue)[0]}}.<span class="text-muted">{{(tx.fee | fmtNemValue)[1]}}</span></td>\n' +
    '        <td><span class="text-muted">{{tx.deadline | fmtNemDate}}</span></td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '        <td colspan="4"><span ng-show="parent"><strong>Multisig</strong></span> hash: <tt>{{meta.hash.data}}</tt></td>\n' +
    '    </tr>\n' +
    '</table>');
  $templateCache.put('views/lineProvisionNamespace.html',
    '<table class="table table-condensed" data-toggle="tooltip" data-placement="{{tooltipPosition}}" title="Provision Namespace Transaction" style="cursor:pointer" ng-click="displayTransactionDetails(parent, tx, meta)">\n' +
    '    <tr ng-show="parent">\n' +
    '        <td colspan="4">multisig issuer <tt>{{parent.signer | fmtPubToAddress:networkId | fmtAddress}}</tt>\n' +
    '            <button ng-show="needsSignature" ng-click="cosignCallback(parent, tx, meta)" type="button" class="btn btn-primary"><span class="glyphicon glyphicon-send"></span> COSIGN</button></td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '        <td><span class="glyphicon glyphicon-grain text-info"></span> <tt>{{tx.signer | fmtPubToAddress:networkId | fmtAddress}}</tt></td>\n' +
    '        <td></td>\n' +
    '        <td rowspan="2"><span ng-show="confirmed">h: {{meta.height}}</span></td>\n' +
    '        <td>{{tx.timeStamp | fmtNemDate}}</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '        <td><span class="text-muted">{{tx.parent}}</span><span ng-show="tx.parent">.</span><strong>{{tx.newPart}}</strong></td>\n' +
    '        <td>fee: {{(tx.fee | fmtNemValue)[0]}}.<span class="text-muted">{{(tx.fee | fmtNemValue)[1]}}</span></td>\n' +
    '        <td><span class="text-muted">{{tx.deadline | fmtNemDate}}</span></td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '        <td colspan="4"><span ng-show="parent"><strong>Multisig</strong></span> hash: <tt>{{meta.hash.data}}</tt></td>\n' +
    '    </tr>\n' +
    '</table>');
  $templateCache.put('views/lineTransfer.html',
    '<table class="table table-condensed" data-toggle="tooltip" data-placement="{{tooltipPosition}}" title="Transfer Transaction" style="cursor:pointer" ng-click="displayTransactionDetails(parent, tx, meta)">\n' +
    '    <tr ng-show="parent">\n' +
    '        <td colspan="4">multisig issuer <tt>{{parent.signer | fmtPubToAddress:networkId | fmtAddress}}</tt>\n' +
    '            <button ng-show="needsSignature" ng-click="cosignCallback(parent, tx, meta)" type="button" class="btn btn-primary"><span class="glyphicon glyphicon-send"></span> COSIGN</button></td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '        <td><span class="glyphicon glyphicon-arrow-left text-danger"></span> <tt>{{tx.signer | fmtPubToAddress:networkId | fmtAddress}}</tt></td>\n' +
    '        <td>\n' +
    '            <span ng-show="tx.mosaics">\n' +
    '                {{tx.mosaics.length}} <span class="glyphicon glyphicon-globe text-info"></span> x<strong>{{(tx.amount | fmtNemValue)[0]}}</strong>\n' +
    '            </span>\n' +
    '            <span ng-hide="tx.mosaics">\n' +
    '                <strong>{{(tx.amount | fmtNemValue)[0]}}</strong>.<span class="text-muted">{{(tx.amount | fmtNemValue)[1]}}</span> XEM\n' +
    '            </span>\n' +
    '        </td>\n' +
    '        <td rowspan="2"><span ng-show="confirmed">h: {{meta.height}}</span></td>\n' +
    '        <td>{{tx.timeStamp | fmtNemDate}}</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '        <td><span class="glyphicon glyphicon-arrow-right text-success"></span> <tt>{{tx.recipient | fmtAddress}}</tt></td>\n' +
    '        <td>fee: {{(tx.fee | fmtNemValue)[0]}}.<span class="text-muted">{{(tx.fee | fmtNemValue)[1]}} XEM</span></td>\n' +
    '        <td><span class="text-muted">{{tx.deadline | fmtNemDate}}</span></td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '        <td colspan="4"><span ng-show="parent"><strong>Multisig</strong></span> hash: <tt>{{meta.hash.data}}</tt></td>\n' +
    '    </tr>\n' +
    '</table>');
  $templateCache.put('views/login.html',
    '<div class="container">\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-9">&nbsp;</div>\n' +
    '        <div class="col-md-3">\n' +
    '            <p ng-class="{\'connecting\':\'bg-warning\', \'checking\':\'bg-info\', \'connected\':\'bg-success\'}[connectionStatus]">{{connectionStatus}} <span ng-bind-html="xbbcoded(connectionData)"></span></p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <h2>Network\n' +
    '        <span ng-hide="showAll">(obtaining)</span>\n' +
    '        <span ng-show="network === -104">Testnet</span>\n' +
    '        <span ng-show="network === 104">Mainnet</span>\n' +
    '        <span ng-show="network === 96">Mijin</span>\n' +
    '    </h2>\n' +
    '\n' +
    '    <form class="form" name=\'formnode\'>\n' +
    '        <div ng-hide="hostChosen">\n' +
    '            <h3>Choose host:</h3>\n' +
    '            <div class="radio" ng-repeat="host in hosts" ng-class="{\'bg-success\':$parent.selectedHost === host}">\n' +
    '                <label>\n' +
    '                    <!-- ng-repeat creates a scope, so we need a $parent here -->\n' +
    '                    <input type="radio" name="walletName" ng-model="$parent.selectedHost" ng-value="host">\n' +
    '                        {{host.uri}}\n' +
    '                </label>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{\'has-error\':formnode.nodeAddress.$error.hostField}">\n' +
    '                <label for="nodeAdress">Custom node:</label>\n' +
    '                <input ng-model="customSelectedHost" class="form-control" name="nodeAddress" id="nodeAddress" placeholder="http://hostname:7777" host-field>\n' +
    '                <span ng-show="formnode.nodeAddress.$error.hostField">Invalid host name, valid format http://hostname:port (usually port is 7777)</span>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <button type="submit" class="btn btn-default" ng-click="connect()" ng-disabled="! selectedHost && !customSelectedHost">\n' +
    '                    Connect</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '    <div ng-show="hostChosen">\n' +
    '        <form class="form">\n' +
    '            <div ng-show="showAll && storageWallets">\n' +
    '                <h3>Choose wallet:</h3>\n' +
    '                    <div class="radio" ng-repeat="wallet in storageWallets | filter:filterNetwork" ng-class="{\'bg-success\':$parent.selectedWallet === wallet}">\n' +
    '                        <label>\n' +
    '                            <!-- ng-repeat creates a scope, so we need a $parent here -->\n' +
    '                            <input type="radio" name="walletName" ng-model="$parent.selectedWallet" ng-value="wallet">\n' +
    '                                {{wallet.name}}\n' +
    '                                <div ng-repeat="accountDescriptor in wallet.accounts">\n' +
    '                                    <tt>{{accountDescriptor.address | fmtAddress}}</tt>\n' +
    '                                </div>\n' +
    '                        </label>\n' +
    '                        <a href ng-click="removeWallet(wallet)"><span class="glyphicon glyphicon-remove"></span></a>\n' +
    '                    </div>\n' +
    '                <div class="form-group">\n' +
    '                    <label>\n' +
    '                        <input type="checkbox" ng-model="rememberMe"> don\'t ask me for password/key in this session\n' +
    '                    </label>\n' +
    '                </div>\n' +
    '                <div class="form-group">\n' +
    '                    <button type="submit" class="btn btn-default" ng-disabled="!selectedWallet || connectionStatus !== \'connected\'" ng-click="walletLogin(selectedWallet)">\n' +
    '                        Login</button>\n' +
    '                    <span ng-show="connectionStatus !== \'connected\'" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign"></span>\n' +
    '                        Not connected</span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '\n' +
    '        <div>\n' +
    '            <h3>Add wallet</h3>\n' +
    '            <form>\n' +
    '                <label class="radio">\n' +
    '                    <input type="radio" ng-click="showAddEncWallet()" name="levyFeeType"> I already have a private key that I want to import\n' +
    '                </label>\n' +
    '                <label class="radio">\n' +
    '                    <input type="radio" ng-click="showAddPassWallet()" name="levyFeeType"> I want to create a brainwallet (password-based)\n' +
    '                </label>\n' +
    '                <label class="radio" ng-show="network === -104">\n' +
    '                    <input type="radio" ng-click="showTestnetButtons()" name="levyFeeType"> Show me all options avail in TESTnet\n' +
    '                </label>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '\n' +
    '        <div ng-show="showAllButtons">\n' +
    '            <button ng-click="showAddEncWallet()" type="button" ng-disabled="!showAll" class="btn btn-primary">Add "encrypted private key" wallet</button>\n' +
    '            <button ng-click="showAddPassWallet()" type="button" ng-disabled="!showAll" class="btn btn-primary">Add brain-wallet</button>\n' +
    '            <button ng-show="network === -104" ng-click="showAddSaltedWallet()" type="button" ng-disabled="!showAll" class="btn btn-warning">Add SALTed-wallet</button>\n' +
    '            <button ng-show="network === -104" ng-click="showAddPrivatekeyWallet()" type="button" ng-disabled="!showAll" class="btn btn-warning">Add privatekey wallet</button>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="animated-layer" ng-hide="!showAll || addPrivatekeyWalletHidden">\n' +
    '            <form name="formpriv1">\n' +
    '                <p ng-hide="storageWallets">Seems you don\'t have wallet yet, please create one.</p>\n' +
    '                <p>Wallet data is saved locally in your Local Storage <a href ng-click="localStorageHelpVisible=!localStorageHelpVisible">[learn more]</a>\n' +
    '                    <a href="http://www.w3schools.com/html/html5_webstorage.asp" rel="nofollow">[external information]</a></p>\n' +
    '                <p class="bg-danger">Privatekey wallet requires entering private key every time, it should be used only for testing purposes</p>\n' +
    '                <p><strong>This wallet is only available in TESTnet</strong></p>\n' +
    '                <p class="animated-layer" ng-show="localStorageHelpVisible">\n' +
    '                    With local storage web applications can store data locally within the user\'s browser (if the browser supports this, which most recent browsers do). This might sound a little unsafe at first but don\'t worry. Every application has their own space in the Local Storage. No application can read another application\'s data. <br>\n' +
    '                    Browsers can be configured (e.g. by add-ons) to clear the local storage at times. This will lead to the loss of those data and can\'t be undone easily. In our case your wallets would be gone so it is very important that you have your password / private-key ready if that occurs. By default browsers should not clear the local storage so if you haven\'t specifically configured your browser to do so you should be fine.\n' +
    '                </p>\n' +
    '                <div class="form-group" ng-class="{\'has-error\':formpriv1.walletName.$error.walletNameField}">\n' +
    '                    <label for="walletName">Wallet name:</label>\n' +
    '                    <input ng-model="dummy.name" class="form-control" id="walletName" name="walletName" wallet-name-field>\n' +
    '                    <span ng-show="formpriv1.walletName.$error.walletNameField" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign"></span>Empty wallet name or wallet with this name already exists</span>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group" ng-class="{\'has-error\':formpriv1.accountAddress.$error.addressField}">\n' +
    '                    <label for="accountAddress">Account\'s address:</label>\n' +
    '                    <input ng-model="dummy.accounts[0].address" class="form-control" name="accountAddress" id="accountAddress" address-field>\n' +
    '                    <span ng-show="formpriv1.accountAddress.$error.addressField">This is not a valid address</span>\n' +
    '                </div>\n' +
    '                <button type="submit" class="btn btn-default" ng-disabled="formpriv1.walletName.$error.walletNameField || formpriv1.accountAddress.$error.addressField"\n' +
    '                        ng-click="addWallet()">Create</button>\n' +
    '            </form>\n' +
    '            <div class="clearfix"></div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="animated-layer" ng-hide="!showAll || addSaltedWalletHidden">\n' +
    '            <form name="formpriv2">\n' +
    '                <p>Wallet data is saved locally in your Local Storage <a href ng-click="localStorageHelpVisible=!localStorageHelpVisible">[learn more]</a>\n' +
    '                    <a href="http://www.w3schools.com/html/html5_webstorage.asp" rel="nofollow">[external information]</a></p>\n' +
    '                <p class="bg-danger">Keep in mind that SALTed wallet, besides entered password uses <strong>SALT</strong>, that is saved if <em>Local Storage</em>.\n' +
    '                    If you clean local storage, you will loose access to your account!</p>\n' +
    '                <p><strong>This wallet is only available in TESTnet</strong></p>\n' +
    '                <p class="animated-layer" ng-show="localStorageHelpVisible">\n' +
    '                    With local storage web applications can store data locally within the user\'s browser (if the browser supports this, which most recent browsers do). This might sound a little unsafe at first but don\'t worry. Every application has their own space in the Local Storage. No application can read another application\'s data. <br>\n' +
    '                    Browsers can be configured (e.g. by add-ons) to clear the local storage at times. This will lead to the loss of those data and can\'t be undone easily. In our case your wallets would be gone so it is very important that you have your password / private-key ready if that occurs. By default browsers should not clear the local storage so if you haven\'t specifically configured your browser to do so you should be fine.\n' +
    '                </p>\n' +
    '                <div class="form-group" ng-class="{\'has-error\':formpriv2.walletName.$error.walletNameField}">\n' +
    '                    <label for="walletName">Wallet name:</label>\n' +
    '                    <input ng-model="dummy.name" class="form-control" id="walletName" name="walletName" wallet-name-field>\n' +
    '                    <span ng-show="formpriv2.walletName.$error.walletNameField" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign"></span>Empty wallet name or wallet with this name already exists</span>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group" ng-class="{\'has-error\':formpriv2.passwordSalt.$error.passwordField}">\n' +
    '                    <label for="passwordSalt">Password:</label>\n' +
    '                    <input type="password" ng-model="dummy.accounts[0].password" class="form-control" name="passwordSalt" id="passwordSalt" password-field>\n' +
    '                    <span ng-show="formpriv2.passwordSalt.$error.passwordField" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign"></span>Password must have an upper case letter, lower case letter, number and have a length of at least 10 chars.</span>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group" ng-class="{\'has-error\':formpriv2.confirmation.$error.pattern || formpriv2.confirmation.$error.required}">\n' +
    '                    <label for="confirmation">Confirm by typing: "I know what I\'m doing, I\'m taking full responsibility for my actions"</label>\n' +
    '                    <input type="text" ng-model="saltConfirmation" class="form-control" name="confirmation" id="confirmation" required ng-pattern="/^I know what I\'m doing, I\'m taking full responsibility for my actions$/" value=" " >\n' +
    '                    <span ng-show="formpriv2.confirmation.$error.pattern || formpriv2.confirmation.$error.required" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign"></span>Enter proper confirmation.</span>\n' +
    '                </div>\n' +
    '\n' +
    '                <button type="submit" class="btn btn-default"\n' +
    '                        ng-disabled="formpriv2.walletName.$error.walletNameField || formpriv2.passwordSalt.$error.passwordField || formpriv2.confirmation.$error.pattern || formpriv2.confirmation.$error.required"\n' +
    '                        ng-click="addSaltedWallet()">\n' +
    '                    <span ng-show="generatingInProgress"><span class="glyphicon glyphicon-refresh spinning"></span></span> {{addSaltedWalletButtonText}} </button>\n' +
    '            </form>\n' +
    '            <div class="clearfix"></div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="animated-layer" ng-hide="!showAll || addPassWalletHidden">\n' +
    '            <form name="formpriv3">\n' +
    '                <p>Wallet data is saved locally in your Local Storage <a href ng-click="localStorageHelpVisible=!localStorageHelpVisible">[learn more]</a>\n' +
    '                    <a href="http://www.w3schools.com/html/html5_webstorage.asp" rel="nofollow">[external information]</a></p>\n' +
    '                <p class="bg-danger">Pass wallet uses ONLY password hashed multiple times, therefore it\'s crucial to select SAFE password. <a href="https://xkcd.com/936/" rel="nofollow">XKCD #936</a></p>\n' +
    '                <p class="bg-danger">Please read about <a href="https://en.bitcoin.it/wiki/Brainwallet" rel="nofollow">dangers</a> that brainwallet poses</p>\n' +
    '                <p class="animated-layer" ng-show="localStorageHelpVisible">\n' +
    '                    With local storage web applications can store data locally within the user\'s browser (if the browser supports this, which most recent browsers do). This might sound a little unsafe at first but don\'t worry. Every application has their own space in the Local Storage. No application can read another application\'s data. <br>\n' +
    '                    Browsers can be configured (e.g. by add-ons) to clear the local storage at times. This will lead to the loss of those data and can\'t be undone easily. In our case your wallets would be gone so it is very important that you have your password / private-key ready if that occurs. By default browsers should not clear the local storage so if you haven\'t specifically configured your browser to do so you should be fine.\n' +
    '                </p>\n' +
    '                <div class="form-group" ng-class="{\'has-error\':formpriv3.walletName.$error.walletNameField}">\n' +
    '                    <label for="walletName">Wallet name:</label>\n' +
    '                    <input ng-model="dummy.name" class="form-control" id="walletName" name="walletName" wallet-name-field>\n' +
    '                    <span ng-show="formpriv3.walletName.$error.walletNameField" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign"></span>Empty wallet name or wallet with this name already exists</span>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group" ng-class="{\'has-error\':formpriv3.accountPassword.$error.passwordField}">\n' +
    '                    <label for="accountPassword">Password:</label>\n' +
    '                    <input type="password" ng-model="dummy.accounts[0].password" class="form-control" name="accountPassword" id="accountPassword" password-field>\n' +
    '                    <span ng-show="formpriv3.accountPassword.$error.passwordField" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign"></span>Password must have an upper case letter, lower case letter, number and have a length of at least 10 chars.</span>\n' +
    '                </div>\n' +
    '                <button type="submit" class="btn btn-default"\n' +
    '                        ng-disabled="formpriv3.accountPassword.$error.passwordField || formpriv3.walletName.$error.walletNameField"\n' +
    '                        ng-click="addPassWallet()">\n' +
    '                    <span ng-show="generatingInProgress"><span class="glyphicon glyphicon-refresh spinning"></span></span> {{addPassWalletButtonText}} </button>\n' +
    '            </form>\n' +
    '            <div class="clearfix"></div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="animated-layer" ng-hide="!showAll || addEncWalletHidden">\n' +
    '            <form name="formpriv4">\n' +
    '                <p ng-hide="storageWallets">Seems you don\'t have wallet yet, please create one.</p>\n' +
    '                <p>Encrypted private key is saved locally in your Local Storage <a href ng-click="localStorageHelpVisible=!localStorageHelpVisible">[learn more]</a>\n' +
    '                    <a href="http://www.w3schools.com/html/html5_webstorage.asp" rel="nofollow">[external information]</a></p>\n' +
    '                <p class="animated-layer" ng-show="localStorageHelpVisible">\n' +
    '                    With local storage web applications can store data locally within the user\'s browser (if the browser supports this, which most recent browsers do). This might sound a little unsafe at first but don\'t worry. Every application has their own space in the Local Storage. No application can read another application\'s data. <br>\n' +
    '                    Browsers can be configured (e.g. by add-ons) to clear the local storage at times. This will lead to the loss of those data and can\'t be undone easily. In our case your wallets would be gone so it is very important that you have your password / private-key ready if that occurs. By default browsers should not clear the local storage so if you haven\'t specifically configured your browser to do so you should be fine.\n' +
    '                </p>\n' +
    '                <div class="form-group" ng-class="{\'has-error\':formpriv4.walletName.$error.walletNameField}">\n' +
    '                    <label for="walletName">Wallet name:</label>\n' +
    '                    <input ng-model="dummy.name" class="form-control" id="walletName" name="walletName" wallet-name-field>\n' +
    '                    <span ng-show="formpriv4.walletName.$error.walletNameField" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign"></span>Empty wallet name or wallet with this name already exists</span>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group" ng-class="{\'has-error\':formpriv4.accountAddress.$error.addressField}">\n' +
    '                    <label for="accountAddress">Account\'s address:</label>\n' +
    '                    <input ng-model="dummy.accounts[0].address" class="form-control" name="accountAddress" id="accountAddress" address-field>\n' +
    '                    <span ng-show="formpriv4.accountAddress.$error.addressField">This is not a valid address</span>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group" ng-class="{\'has-error\':dummy.privatekey.length===0 || invalidKeyOrPassword}">\n' +
    '                    <label for="privatekey">Private Key</label>\n' +
    '                    <input type="password" class="form-control" ng-model="dummy.privatekey" id="privatekey">\n' +
    '                    <span ng-show="invalidKeyOrPassword" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign">Key does not correspond to the account above</span></span>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group" ng-class="{\'has-error\':formpriv4.accountPassword.$error.passwordField}">\n' +
    '                    <label for="accountPassword">Password:</label>\n' +
    '                    <input type="password" ng-model="dummy.accounts[0].password" class="form-control" name="accountPassword" id="accountPassword" password-field>\n' +
    '                    <span ng-show="formpriv4.accountPassword.$error.passwordField" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign"></span>Password must have an upper case letter, lower case letter, number and have a length of at least 10 chars.</span>\n' +
    '                </div>\n' +
    '                <button type="submit" class="btn btn-default"\n' +
    '                        ng-disabled="formpriv4.walletName.$error.walletNameField || formpriv4.accountAddress.$error.addressField || formpriv4.accountPassword.$error.passwordField"\n' +
    '                        ng-click="addEncWallet()">Create</button>\n' +
    '            </form>\n' +
    '            <div class="clearfix"></div>\n' +
    '        </div>\n' +
    '    <!-- showWallets -->\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
  $templateCache.put('views/msgDecode.html',
    '<div class="modal-header">\n' +
    '    <h3 class="modal-title">Decode message</h3>\n' +
    '</div>\n' +
    '<div class="modal-body" style="padding-left:30px; padding-right:30px;">\n' +
    '    <form name="formtransfer">\n' +
    '\n' +
    '        <div ng-hide="walletScope.walletAccount.brain" class="form-group" ng-class="{\'has-error\':decode.privatekey.length===0 || invalidKeyOrPassword}">\n' +
    '            <label for="privatekey">Private Key</label>\n' +
    '            <input type="password" class="form-control" ng-model="decode.privatekey" id="privatekey" placeholder="">\n' +
    '            <span ng-show="invalidKeyOrPassword" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign"></span>Key does not correspond to the account</span>\n' +
    '        </div>\n' +
    '        <div ng-show="walletScope.walletAccount.brain" class="form-group" ng-class="{\'has-error\':decode.password.length===0 || invalidKeyOrPassword}">\n' +
    '            <label for="password">Password</label>\n' +
    '            <input type="password" class="form-control" ng-model="decode.password" id="password" placeholder="">\n' +
    '            <span ng-show="invalidKeyOrPassword" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign"></span>Invalid password.</span>\n' +
    '        </div>\n' +
    '\n' +
    '        <div>\n' +
    '            <pre>{{tx.message.payload | fmtSplitHex}}</pre>\n' +
    '        </div>\n' +
    '        <div>\n' +
    '            <span ng-show="generatingInProgress"><span class="glyphicon glyphicon-refresh spinning"></span></span>\n' +
    '            {{decoded | fmtHexMessage}}\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '    <button class="btn btn-primary" type="button" ng-click="decode()" ng-disabled="recipientPublicKey === \'\'">\n' +
    '        <span ng-show="gettingRecipientInfo"><span class="glyphicon glyphicon-refresh spinning"></span></span>\n' +
    '        decode message</button>\n' +
    '    <button class="btn btn-warning" type="button" ng-click="close()">Close</button>\n' +
    '</div>');
  $templateCache.put('views/txCosignature.html',
    '<div class="modal-header">\n' +
    '    <h3 class="modal-title">Cosign transaction</h3>\n' +
    '</div>\n' +
    '<div class="modal-body">\n' +
    '    <form>\n' +
    '        <div class="form-group">\n' +
    '            <label for="multisigAccountAddress">Multisig account</label>\n' +
    '            <input type="text" class="form-control" ng-model="txCosignData.multisigAccountAddress" id="multisigAccountAddress" placeholder="" readonly>\n' +
    '        </div>\n' +
    '\n' +
    '        <div ng-show="common.requiresKey">\n' +
    '            <div ng-hide="walletScope.walletAccount.brain" class="form-group" ng-class="{\'has-error\':common.privatekey.length===0 || invalidKeyOrPassword}">\n' +
    '                <label for="privatekey">Private Key</label>\n' +
    '                <input type="password" class="form-control" ng-model="common.privatekey" id="privatekey" placeholder="">\n' +
    '                <span ng-show="invalidKeyOrPassword" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign">Key does not correspond to the account</span></span>\n' +
    '            </div>\n' +
    '            <div ng-show="walletScope.walletAccount.brain" class="form-group" ng-class="{\'has-error\':common.password.length===0 || invalidKeyOrPassword}">\n' +
    '                <label for="password">Password</label>\n' +
    '                <input type="password" class="form-control" ng-model="common.password" id="password" placeholder="">\n' +
    '                <span ng-show="invalidKeyOrPassword" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign"></span>Invalid password.</span>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group">\n' +
    '            <label for="hash">Transaction hash</label>\n' +
    '            <input type="text" class="form-control" ng-model="txCosignData.hash" id="hash" placeholder="" readonly>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="fee">Fee</label>\n' +
    '            <input type="number" class="form-control" ng-model="txCosignData.fee" id="fee" placeholder="4">\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '    <span ng-show="invalidKeyOrPassword" class="text-danger glyphicon glyphicon-exclamation-sign"></span>\n' +
    '    <button class="btn btn-primary" type="button" ng-disabled="okPressed || common.requiresKey && common.privatekey.length === 0 && common.password.length === 0" ng-click="ok()">Send</button>\n' +
    '    <button class="btn btn-warning" type="button" ng-click="cancel()">Cancel</button>\n' +
    '</div>\n' +
    '');
  $templateCache.put('views/txDetails.html',
    '<div class="modal-header">\n' +
    '    <h3 class="modal-title">Transaction details</h3>\n' +
    '</div>\n' +
    '<div class="modal-body" style="padding-left:30px; padding-right:30px;">\n' +
    '    <div ng-show="parent">\n' +
    '        <div class="row">\n' +
    '            <div class="col-sm-12">\n' +
    '                <strong>Multisig Transaction</strong>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '            <div class="col-sm-2">Issuer</div>\n' +
    '            <div class="col-sm-10">{{parent.signer | fmtPubToAddress:walletScope.networkId | fmtAddress}}</div>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '            <div class="col-sm-2">Multisig fee</div>\n' +
    '            <div class="col-sm-10">{{(parent.fee | fmtNemValue)[0]}}.<span class="text-muted">{{(parent.fee | fmtNemValue)[1]}} XEM</span></div>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '            <div class="col-sm-2">Timestamp</div>\n' +
    '            <div class="col-sm-10">{{tx.timeStamp | fmtNemDate}}, <span class="text-muted">deadline {{tx.deadline | fmtNemDate}}</span></div>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '            <div class="col-sm-2">Hash</div>\n' +
    '            <div class="col-sm-10"><tt>{{meta.hash.data}}</tt></div>\n' +
    '        </div>\n' +
    '        <!--\n' +
    '        <div class="row">\n' +
    '            <div class="col-sm-2"><span class="text-muted">Signature</span></div>\n' +
    '            <div class="col-sm-10"><span class="text-muted"><tt>{{parent.signature}}</tt></span></div>\n' +
    '        </div>\n' +
    '        -->\n' +
    '        <div ng-repeat="sig in parent.signatures">\n' +
    '            <div class="row">\n' +
    '                <div class="col-sm-1">&nbsp;</div>\n' +
    '                <div class="col-sm-2">Cosignatory</div>\n' +
    '                <div class="col-sm-9">{{sig.signer | fmtPubToAddress:walletScope.networkId | fmtAddress}}</div>\n' +
    '            </div>\n' +
    '            <div class="row">\n' +
    '                <div class="col-sm-1">&nbsp;</div>\n' +
    '                <div class="col-sm-2">Timestamp</div>\n' +
    '                <div class="col-sm-9">{{sig.timeStamp | fmtNemDate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <hr>\n' +
    '    </div>\n' +
    '\n' +
    '    <tagdetails  parent="parent" tx="tx" meta="meta"></tagdetails>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '    <button class="btn btn-primary" type="button" ng-click="ok()">Ok</button>\n' +
    '</div>');
  $templateCache.put('views/txMosaic.html',
    '<div class="modal-header">\n' +
    '    <h3 class="modal-title">Mosaic definition creation transaction</h3>\n' +
    '</div>\n' +
    '<div class="modal-body">\n' +
    '    <ul class="nav nav-tabs" ng-show="walletScope.accountData.meta.cosignatoryOf.length">\n' +
    '        <li role="presentation" ng-class="txMosaicData.isMultisig?\'\':\'active\'" ng-click="selectTab(\'normal\')"><a href="#">Normal</a></li>\n' +
    '        <li role="presentation" ng-class="txMosaicData.isMultisig?\'active\':\'\'" ng-click="selectTab(\'multisig\')"><a href="#">Multisig</a></li>\n' +
    '    </ul>\n' +
    '\n' +
    '    <form name="formmosaic">\n' +
    '        <div ng-show="txMosaicData.isMultisig">\n' +
    '            <label for="multisigAccount">Multisig account</label>\n' +
    '            <select class="form-control"\n' +
    '                    ng-options="acc.address for acc in walletScope.accountData.meta.cosignatoryOf track by acc.address"\n' +
    '                    ng-model="txMosaicData.multisigAccount"\n' +
    '                    ng-change="updateCurrentAccountMosaics()"\n' +
    '                    id="multisigAccount">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '\n' +
    '        <div ng-show="common.requiresKey">\n' +
    '            <div ng-hide="walletScope.walletAccount.brain" class="form-group" ng-class="{\'has-error\':common.privatekey.length===0 || invalidKeyOrPassword}">\n' +
    '                <label for="privatekey" class="control-label"><span ng-show="txMosaicData.isMultisig">Signer\'s</span> Private Key</label>\n' +
    '                <input type="password" class="form-control" ng-model="common.privatekey" id="privatekey" placeholder="">\n' +
    '                <span ng-show="invalidKeyOrPassword" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign">Key does not correspond to the account</span></span>\n' +
    '            </div>\n' +
    '            <div ng-show="walletScope.walletAccount.brain" class="form-group" ng-class="{\'has-error\':common.password.length===0 || invalidKeyOrPassword}">\n' +
    '                <label for="password" class="control-label">Password</label>\n' +
    '                <input type="password" class="form-control" ng-model="common.password" id="password" placeholder="">\n' +
    '                <span ng-show="invalidKeyOrPassword" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign"></span>Invalid password.</span>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div>\n' +
    '            <label for="namespaceParent" class="control-label">Parent Namespace</label>\n' +
    '            <select class="form-control"\n' +
    '                    ng-options="namespace.fqn for namespace in walletScope.namespaceOwned[currentAccount] track by namespace.fqn"\n' +
    '                    ng-model="txMosaicData.namespaceParent"\n' +
    '                    id="namespaceParent">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '        <div class="form-group" ng-class="{\'has-error\':txMosaicData.mosaicName.length===0}">\n' +
    '            <label for="mosaicName" class="control-label">Mosaic name</label>\n' +
    '            <input autofocus="autofocus" type="text" class="form-control" ng-model="txMosaicData.mosaicName" id="mosaicName" placeholder="">\n' +
    '        </div>\n' +
    '        <div class="form-group" ng-class="{\'has-error\':txMosaicData.mosaicDescription.length===0}">\n' +
    '            <label for="mosaicDescription" class="control-label">Mosaic description</label>\n' +
    '            <textarea class="form-control" ng-model="txMosaicData.mosaicDescription" id="mosaicDescription" rows="5"></textarea>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-horizontal">\n' +
    '            Mosaic properties\n' +
    '            <div class="form-group">\n' +
    '                <label class="col-sm-3 control-label" for="propertiesInitialSupply">Initial supply</label>\n' +
    '                <div class="col-sm-5">\n' +
    '                    <input type="number" class="form-control" ng-model="txMosaicData.properties.initialSupply" id="propertiesInitialSupply" placeholder="">\n' +
    '                </div>\n' +
    '                <div class="col-sm-4"><p class="form-control-static">\n' +
    '                    <strong>{{(txMosaicData.properties.initialSupply)}}</strong>\n' +
    '                    <span class="text-muted">.{{(0 | fmtSupplyRaw:txMosaicData.properties.divisibility)[1]}}</span>\n' +
    '                </p></div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <label class="col-sm-3 control-label" for="propertiesDivisibility">Divisibility</label>\n' +
    '                <div class="col-sm-2">\n' +
    '                    <input type="number" class="form-control" ng-model="txMosaicData.properties.divisibility" id="propertiesDivisibility" placeholder="">\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <div class="col-sm-offset-3 col-sm-9">\n' +
    '                    <label class="control-label">\n' +
    '                        <input type="checkbox" ng-model="txMosaicData.properties.transferable" placeholder="">\n' +
    '                        Transferable\n' +
    '                    </label>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '                <div class="col-sm-offset-3 col-sm-9">\n' +
    '                    <label class="control-label">\n' +
    '                        <input type="checkbox" ng-model="txMosaicData.properties.supplyMutable" placeholder="">\n' +
    '                        Mutable Supply\n' +
    '                    </label>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-horizontal" style="border:1px solid #ccc;">\n' +
    '            Levy information\n' +
    '            <div class="form-group">\n' +
    '                <div class="col-sm-offset-4 col-sm-8">\n' +
    '                    <label for="hasLevy" class="control-label">\n' +
    '                        <input type="checkbox"ng-model="hasLevy" id="hasLevy" placeholder="">\n' +
    '                        Requires levy\n' +
    '                    </label>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div ng-show="hasLevy" class="form-horizontal">\n' +
    '                UI-limitation: <span class="text-muted">right now, only owned mosaics can be used as a levy.</span>\n' +
    '                <div class="form-group">\n' +
    '                    <div class="col-sm-4">\n' +
    '                        <label class="control-label-static" for="levyMosaicS">Select levy mosaic</label>\n' +
    '                    </div>\n' +
    '                    <div class="col-sm-8">\n' +
    '                        <select class="form-control"\n' +
    '                                ng-options="mosaicName for mosaicName in currentAccountMosaicNames"\n' +
    '                                ng-model="selectedMosaic"\n' +
    '                                required="required"\n' +
    '                                id="levyMosaicS">\n' +
    '                            <!-- <option value=""> Select levy mosaic </option> -->\n' +
    '                        </select>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <!--\n' +
    '                <div class="form-group">\n' +
    '                    <div class="col-sm-1 control-form-static"><strong>OR</strong></div>\n' +
    '                    <div class="col-sm-4">\n' +
    '                        <label class="control-label-static" for="levyMosaicT">Type levy mosaic name</label>\n' +
    '                    </div>\n' +
    '                    <div class="col-sm-7">\n' +
    '                        <input type="text" class="form-control" ng-model="txMosaicData.levy.mosaic" id="levyMosaicT" placeholder="nem:xem">\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                -->\n' +
    '                <div class="form-group" ng-class="{\'has-error\':hasLevy && formmosaic.levyAddress.$error.addressField}">\n' +
    '                    <div class="col-sm-4">\n' +
    '                        <label class="control-label-static" for="levyAddress">Levy address</label>\n' +
    '                    </div>\n' +
    '                    <div class="col-sm-8">\n' +
    '                        <input type="text" class="form-control" ng-model="txMosaicData.levy.address" name="levyAddress" id="levyAddress" placeholder="TBLOOD-PLWOWM-Z2TARX-4RFPOS-OWLULH-XMROBN-2WXI" address-field>\n' +
    '                        <span ng-show="formmosaic.levyAddress.$error.addressField">Not a valid address</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="form-group">\n' +
    '                    <div class="col-sm-4">\n' +
    '                        <label class="control-label-static" for="levyFee">Levy fee</label>\n' +
    '                    </div>\n' +
    '                    <div class="col-sm-5">\n' +
    '                        <label class="radio-inline">\n' +
    '                            <input type="radio" ng-model="txMosaicData.levy.feeType" name="levyFeeType" ng-value="1"> Absolute\n' +
    '                        </label>\n' +
    '                        <label class="radio-inline">\n' +
    '                            <input type="radio" ng-model="txMosaicData.levy.feeType" name="levyFeeType" ng-value="2"> Percentile\n' +
    '                        </label>\n' +
    '                    </div>\n' +
    '                    <div class="col-sm-3">\n' +
    '                        <input type="number" class="form-control" ng-model="txMosaicData.levy.fee" id="levyFee">\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div ng-show="txMosaicData.levy.feeType === 1">\n' +
    '                    Selecting absolute, will cause constant levy of\n' +
    '                    <strong>{{(txMosaicData.levy.fee | fmtSupply:walletScope.mosaicOwned[currentAccount][selectedMosaic].mosaicId:walletScope.mosaicDefinitionMetaDataPair)[0]}}</strong>\n' +
    '                    <span class="text-muted">.{{(txMosaicData.levy.fee | fmtSupply:walletScope.mosaicOwned[currentAccount][selectedMosaic].mosaicId:walletScope.mosaicDefinitionMetaDataPair)[1]}}</span>\n' +
    '                    of {{selectedMosaic}}\n' +
    '                </div>\n' +
    '                <div ng-show="txMosaicData.levy.feeType === 2">\n' +
    '                    Selecting percentile, will cause linear levy:\n' +
    '                    <ul>\n' +
    '                        <li ng-repeat="amountSend in [100, 1000, 3145, 10000, txMosaicData.properties.initialSupply] track by $index">\n' +
    '                            Sending\n' +
    '                            <strong>{{(amountSend | fmtSupplyRaw:txMosaicData.properties.divisibility)[0]}}</strong>\n' +
    '                            <span class="text-muted">.{{(amountSend | fmtSupplyRaw:txMosaicData.properties.divisibility)[1]}}</span>\n' +
    '                            <span class="text-muted">{{txMosaicData.namespaceParent.fqn}}:</span>{{txMosaicData.mosaicName}}\n' +
    '                            will imply levy of\n' +
    '\n' +
    '                            <strong>{{( (amountSend * txMosaicData.levy.fee / 10000) | fmtSupply:walletScope.mosaicOwned[currentAccount][selectedMosaic].mosaicId:walletScope.mosaicDefinitionMetaDataPair)[0]}}</strong>\n' +
    '                            <span class="text-muted">.{{( (amountSend * txMosaicData.levy.fee / 10000) | fmtSupply:walletScope.mosaicOwned[currentAccount][selectedMosaic].mosaicId:walletScope.mosaicDefinitionMetaDataPair)[1]}}</span>\n' +
    '                            {{selectedMosaic}}\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group">\n' +
    '            <label class="control-label">Fee</label>\n' +
    '            <div>\n' +
    '                {{(txMosaicData.fee | fmtNemValue)[0]}}.{{(txMosaicData.fee | fmtNemValue)[1]}}\n' +
    '                <span ng-show="txMosaicData.isMultisig">+ {{(txMosaicData.innerFee | fmtNemValue)[0]}}.{{(txMosaicData.innerFee | fmtNemValue)[1]}}</span>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="due" class="control-label">Due</label>\n' +
    '            <input type="number" class="form-control" ng-model="txTransferData.due" id="due" placeholder="60">\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="mosaicFeeSink" class="control-label">Mosaic sink</label>\n' +
    '            <input type="text" class="form-control" ng-model="txMosaicData.mosaicFeeSink" id="mosaicFeeSink" disabled="true">\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label class="control-label">Mosaic fee</label>\n' +
    '            <div>\n' +
    '                {{(txMosaicData.mosaicFee | fmtNemValue)[0]}}.{{(txMosaicData.mosaicFee | fmtNemValue)[1]}}\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '    <span ng-show="invalidKeyOrPassword" class="text-danger glyphicon glyphicon-exclamation-sign"></span>\n' +
    '    <button class="btn btn-primary" type="button" ng-disabled="okPressed || common.requiresKey && common.privatekey.length === 0 && common.password.length === 0" ng-click="ok()">Send</button>\n' +
    '    <button class="btn btn-warning" type="button" ng-click="cancel()">Cancel</button>\n' +
    '</div>\n' +
    '');
  $templateCache.put('views/txMosaicSupply.html',
    '<div class="modal-header">\n' +
    '    <h3 class="modal-title">Mosaic supply change transaction</h3>\n' +
    '</div>\n' +
    '<div class="modal-body">\n' +
    '    <ul class="nav nav-tabs" ng-show="walletScope.accountData.meta.cosignatoryOf.length">\n' +
    '        <li role="presentation" ng-class="txMosaicSupplyData.isMultisig?\'\':\'active\'" ng-click="selectTab(\'normal\')"><a href="#">Normal</a></li>\n' +
    '        <li role="presentation" ng-class="txMosaicSupplyData.isMultisig?\'active\':\'\'" ng-click="selectTab(\'multisig\')"><a href="#">Multisig</a></li>\n' +
    '    </ul>\n' +
    '\n' +
    '    <form>\n' +
    '        <div ng-show="txMosaicSupplyData.isMultisig">\n' +
    '            <label for="multisigAccount">Multisig account</label>\n' +
    '            <select class="form-control"\n' +
    '                    ng-options="acc.address for acc in walletScope.accountData.meta.cosignatoryOf track by acc.address"\n' +
    '                    ng-model="txMosaicSupplyData.multisigAccount"\n' +
    '                    ng-change="updateCurrentAccountMosaics()"\n' +
    '                    id="multisigAccount">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '\n' +
    '        <div ng-show="common.requiresKey">\n' +
    '            <div ng-hide="walletScope.walletAccount.brain" class="form-group" ng-class="{\'has-error\':common.privatekey.length===0 || invalidKeyOrPassword}">\n' +
    '                <label for="privatekey" class="control-label"><span ng-show="txMosaicSupplyData.isMultisig">Signer\'s</span> Private Key</label>\n' +
    '                <input type="password" class="form-control" ng-model="common.privatekey" id="privatekey" placeholder="">\n' +
    '                <span ng-show="invalidKeyOrPassword" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign">Key does not correspond to the account</span></span>\n' +
    '            </div>\n' +
    '            <div ng-show="walletScope.walletAccount.brain" class="form-group" ng-class="{\'has-error\':common.password.length===0 || invalidKeyOrPassword}">\n' +
    '                <label for="password" class="control-label">Password</label>\n' +
    '                <input type="password" class="form-control" ng-model="common.password" id="password" placeholder="">\n' +
    '                <span ng-show="invalidKeyOrPassword" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign"></span>Invalid password.</span>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label class="control-label" for="mosaic">Select mosaic</label>\n' +
    '                <select class="form-control"\n' +
    '                    ng-options="mosaicName for mosaicName in currentAccountMosaicNames"\n' +
    '                    ng-model="selectedMosaic"\n' +
    '                    required="required"\n' +
    '                    id="mosaic">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-horizontal">\n' +
    '            <div class="form-group">\n' +
    '                <div class="col-sm-4">\n' +
    '                    <label class="control-label">Change type</label>\n' +
    '                </div>\n' +
    '                <div class="col-sm-8">\n' +
    '                    <div class="radio">\n' +
    '                        <label>\n' +
    '                            <input type="radio" ng-model="txMosaicSupplyData.supplyType" ng-value="1"> Create\n' +
    '                        </label>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="col-sm-offset-4 col-sm-4">\n' +
    '                    <div class="radio">\n' +
    '                        <label>\n' +
    '                            <input type="radio" ng-model="txMosaicSupplyData.supplyType" ng-value="2"> Delete\n' +
    '                        </label>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group">\n' +
    '                <div class="col-sm-4">\n' +
    '                    <label class="control-label" >Current supply</label>\n' +
    '                </div>\n' +
    '                <div class="col-sm-8"><p class="form-control-static">\n' +
    '                    <strong>{{walletScope.mosaicDefinitionMetaDataPair[selectedMosaic].supply}}</strong>\n' +
    '                    <span class="text-muted">.{{(0 | fmtSupply:walletScope.mosaicOwned[currentAccount][selectedMosaic].mosaicId:walletScope.mosaicDefinitionMetaDataPair)[1]}}</span>\n' +
    '                </p></div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group">\n' +
    '                <div class="col-sm-4">\n' +
    '                    <label class="control-label" for="changeAmount">Change amount</label>\n' +
    '                </div>\n' +
    '                <div class="col-sm-4">\n' +
    '                    <input autofocus="autofocus" type="number" class="form-control" ng-model="txMosaicSupplyData.delta" id="changeAmount" placeholder="">\n' +
    '                </div>\n' +
    '                <div class="col-sm-4"><p class="form-control-static">\n' +
    '                    <strong>{{txMosaicSupplyData.delta}}</strong>\n' +
    '                    <span class="text-muted">.{{(0 | fmtSupply:walletScope.mosaicOwned[currentAccount][selectedMosaic].mosaicId:walletScope.mosaicDefinitionMetaDataPair)[1]}}</span>\n' +
    '                </p></div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group">\n' +
    '                <div class="col-sm-4">\n' +
    '                    <label class="control-label" >Resulting supply</label>\n' +
    '                </div>\n' +
    '                <div class="col-sm-8" ng-show="txMosaicSupplyData.supplyType === 1"><p class="form-control-static">\n' +
    '                    <strong>{{(txMosaicSupplyData.delta + walletScope.mosaicDefinitionMetaDataPair[selectedMosaic].supply)}}</strong>\n' +
    '                    <span class="text-muted">.{{(0 | fmtSupply:walletScope.mosaicOwned[currentAccount][selectedMosaic].mosaicId:walletScope.mosaicDefinitionMetaDataPair)[1]}}</span>\n' +
    '                </p></div>\n' +
    '                <div class="col-sm-8" ng-show="txMosaicSupplyData.supplyType === 2"><p class="form-control-static">\n' +
    '                    <strong>{{(-txMosaicSupplyData.delta + walletScope.mosaicDefinitionMetaDataPair[selectedMosaic].supply)}}</strong>\n' +
    '                    <span class="text-muted">.{{(0 | fmtSupply:walletScope.mosaicOwned[currentAccount][selectedMosaic].mosaicId:walletScope.mosaicDefinitionMetaDataPair)[1]}}</span>\n' +
    '                </p></div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '        <div class="form-group">\n' +
    '            <label class="control-label">Fee</label>\n' +
    '            <div>\n' +
    '                {{(txMosaicSupplyData.fee | fmtNemValue)[0]}}.{{(txMosaicSupplyData.fee | fmtNemValue)[1]}}\n' +
    '                <span ng-show="txMosaicSupplyData.isMultisig">+ {{(txMosaicSupplyData.innerFee | fmtNemValue)[0]}}.{{(txMosaicSupplyData.innerFee | fmtNemValue)[1]}}</span>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="due" class="control-label">Due</label>\n' +
    '            <input type="number" class="form-control" ng-model="txTransferData.due" id="due" placeholder="60">\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '    <span ng-show="invalidKeyOrPassword" class="text-danger glyphicon glyphicon-exclamation-sign"></span>\n' +
    '    <button class="btn btn-primary" type="button" ng-disabled="okPressed || common.requiresKey && common.privatekey.length === 0 && common.password.length === 0" ng-click="ok()">Send</button>\n' +
    '    <button class="btn btn-warning" type="button" ng-click="cancel()">Cancel</button>\n' +
    '</div>\n' +
    '');
  $templateCache.put('views/txNamespace.html',
    '<div class="modal-header">\n' +
    '    <h3 class="modal-title">Provision Namespace transaction</h3>\n' +
    '</div>\n' +
    '<div class="modal-body">\n' +
    '    <ul class="nav nav-tabs" ng-show="walletScope.accountData.meta.cosignatoryOf.length">\n' +
    '        <li role="presentation" ng-class="txNamespaceData.isMultisig?\'\':\'active\'" ng-click="selectTab(\'normal\')"><a href="#">Normal</a></li>\n' +
    '        <li role="presentation" ng-class="txNamespaceData.isMultisig?\'active\':\'\'" ng-click="selectTab(\'multisig\')"><a href="#">Multisig</a></li>\n' +
    '    </ul>\n' +
    '\n' +
    '    <form>\n' +
    '        <div ng-show="txNamespaceData.isMultisig">\n' +
    '            <label for="multisigAccount">Multisig account</label>\n' +
    '            <select class="form-control"\n' +
    '                    ng-options="acc.address for acc in walletScope.accountData.meta.cosignatoryOf track by acc.address"\n' +
    '                    ng-model="txNamespaceData.multisigAccount"\n' +
    '                    ng-change="_updateCurrentAccount()"\n' +
    '                    id="multisigAccount">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '\n' +
    '        <div ng-show="common.requiresKey">\n' +
    '            <div ng-hide="walletScope.walletAccount.brain" class="form-group" ng-class="{\'has-error\':common.privatekey.length===0 || invalidKeyOrPassword}">\n' +
    '                <label for="privatekey"><span ng-show="txNamespaceData.isMultisig">Signer\'s</span> Private Key</label>\n' +
    '                <input type="password" class="form-control" ng-model="common.privatekey" id="privatekey" placeholder="">\n' +
    '                <span ng-show="invalidKeyOrPassword" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign">Key does not correspond to the account</span></span>\n' +
    '            </div>\n' +
    '            <div ng-show="walletScope.walletAccount.brain" class="form-group" ng-class="{\'has-error\':common.password.length===0 || invalidKeyOrPassword}">\n' +
    '                <label for="password">Password</label>\n' +
    '                <input type="password" class="form-control" ng-model="common.password" id="password" placeholder="">\n' +
    '                <span ng-show="invalidKeyOrPassword" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign"></span>Invalid password.</span>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div>\n' +
    '            <label for="namespaceParent">Parent Namespace (excluding level 3)</label>\n' +
    '            <select class="form-control"\n' +
    '                    ng-options="namespace.fqn for namespace in walletScope.namespaceOwned[currentAccount] | objValues | filter:namespaceLevel3 "\n' +
    '                    ng-model="txNamespaceData.namespaceParent"\n' +
    '                    id="namespaceParent">\n' +
    '                <option value=""> . (new root) </option>\n' +
    '            </select>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="namespaceName">Namespace name</label>\n' +
    '            <input autofocus="autofocus" type="text" class="form-control" ng-model="txNamespaceData.namespaceName" id="namespaceName" placeholder="">\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label>Fee</label>\n' +
    '            <div>\n' +
    '                {{(txNamespaceData.fee | fmtNemValue)[0]}}.{{(txNamespaceData.fee | fmtNemValue)[1]}}\n' +
    '                <span ng-show="txNamespaceData.isMultisig">+ {{(txNamespaceData.innerFee | fmtNemValue)[0]}}.{{(txNamespaceData.innerFee | fmtNemValue)[1]}}</span>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="due">Due</label>\n' +
    '            <input type="number" class="form-control" ng-model="txTransferData.due" id="due" placeholder="60">\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="rentalFeeSink">Rental sink</label>\n' +
    '            <input type="text" class="form-control" ng-model="txNamespaceData.rentalFeeSink" id="rentalFeeSink" disabled="true">\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label>Rental Fee</label>\n' +
    '            <div>\n' +
    '                {{(txNamespaceData.rentalFee | fmtNemValue)[0]}}.{{(txNamespaceData.rentalFee | fmtNemValue)[1]}}\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '    <span ng-show="invalidKeyOrPassword" class="text-danger glyphicon glyphicon-exclamation-sign"></span>\n' +
    '    <button class="btn btn-primary" type="button" ng-disabled="okPressed || common.requiresKey && common.privatekey.length === 0 && common.password.length === 0" ng-click="ok()">Send</button>\n' +
    '    <button class="btn btn-warning" type="button" ng-click="cancel()">Cancel</button>\n' +
    '</div>\n' +
    '');
  $templateCache.put('views/txTransfer.html',
    '<div class="modal-header">\n' +
    '    <h3 class="modal-title">Transfer transaction</h3>\n' +
    '</div>\n' +
    '<div class="modal-body">\n' +
    '    <ul class="nav nav-tabs" ng-show="walletScope.accountData.meta.cosignatoryOf.length">\n' +
    '        <li role="presentation" ng-class="txTransferData.isMultisig?\'\':\'active\'" ng-click="txTransferData.isMultisig=false"><a href="#">Normal</a></li>\n' +
    '        <li role="presentation" ng-class="txTransferData.isMultisig?\'active\':\'\'"ng-click="txTransferData.isMultisig=true"><a href="#">Multisig</a></li>\n' +
    '    </ul>\n' +
    '\n' +
    '    <form name="formtransfer">\n' +
    '        <div ng-show="txTransferData.isMultisig">\n' +
    '            <label for="multisigAccount">Multisig account</label>\n' +
    '            <select class="form-control"\n' +
    '                    ng-options="acc.address for acc in walletScope.accountData.meta.cosignatoryOf track by acc.address"\n' +
    '                    ng-model="txTransferData.multisigAccount"\n' +
    '                    id="multisigAccount">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '\n' +
    '        <div ng-show="common.requiresKey">\n' +
    '            <div ng-hide="walletScope.walletAccount.brain" class="form-group" ng-class="{\'has-error\':common.privatekey.length===0 || invalidKeyOrPassword}">\n' +
    '                <label for="privatekey"><span ng-show="txTransferData.isMultisig">Signer\'s</span> Private Key</label>\n' +
    '                <input type="password" class="form-control" ng-model="common.privatekey" id="privatekey" placeholder="">\n' +
    '                <span ng-show="invalidKeyOrPassword" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign">Key does not correspond to the account</span></span>\n' +
    '            </div>\n' +
    '            <div ng-show="walletScope.walletAccount.brain" class="form-group" ng-class="{\'has-error\':common.password.length===0 || invalidKeyOrPassword}">\n' +
    '                <label for="password">Password</label>\n' +
    '                <input type="password" class="form-control" ng-model="common.password" id="password" placeholder="">\n' +
    '                <span ng-show="invalidKeyOrPassword" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign"></span>Invalid password.</span>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group"  ng-class="{\'has-error\':formtransfer.recipient.$error.addressField}">\n' +
    '            <label for="recipient">Recipient\'s address</label>\n' +
    '            <input autofocus="autofocus" type="text" class="form-control" ng-model="txTransferData.recipient" name="recipient" id="recipient" placeholder="TBLOOD-PLWOWM-Z2TARX-4RFPOS-OWLULH-XMROBN-2WXI" address-field>\n' +
    '            <span ng-show="formtransfer.recipient.$error.addressField">Not a valid address</span>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="amount">Amount</label>\n' +
    '            <input type="number" class="form-control" ng-model="txTransferData.amount" id="amount" placeholder="6.25">\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label>Fee</label>\n' +
    '            <!--\n' +
    '            <input type="number" class="form-control" ng-model="txTransferData.fee" id="fee" placeholder="4">\n' +
    '            -->\n' +
    '            <div>\n' +
    '                {{(txTransferData.fee | fmtNemValue)[0]}}.{{(txTransferData.fee | fmtNemValue)[1]}}\n' +
    '                <span ng-show="txTransferData.isMultisig">+ {{(txTransferData.innerFee | fmtNemValue)[0]}}.{{(txTransferData.innerFee | fmtNemValue)[1]}}</span>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="due">Due</label>\n' +
    '            <input type="number" class="form-control" ng-model="txTransferData.due" id="due" placeholder="60">\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="message">Message</label>\n' +
    '            <textarea class="form-control" ng-model="txTransferData.message" id="message" rows="3"></textarea>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label class="control-label">\n' +
    '                <input type="checkbox" ng-model="txTransferData.encryptMessage" ng-disabled="encryptDisabled" placeholder="">\n' +
    '                Encrypted\n' +
    '            </label>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '    <span ng-show="invalidKeyOrPassword" class="text-danger glyphicon glyphicon-exclamation-sign"></span>\n' +
    '    <button class="btn btn-primary" type="button" ng-disabled="okPressed || common.requiresKey && common.privatekey.length === 0 && common.password.length === 0" ng-click="ok()">Send</button>\n' +
    '    <button class="btn btn-warning" type="button" ng-click="cancel()">Cancel</button>\n' +
    '</div>\n' +
    '');
  $templateCache.put('views/txTransferV2.html',
    '<div class="modal-header">\n' +
    '    <h3 class="modal-title">Transfer transaction with mosaics</h3>\n' +
    '</div>\n' +
    '<div class="modal-body">\n' +
    '    <ul class="nav nav-tabs" ng-show="walletScope.accountData.meta.cosignatoryOf.length">\n' +
    '        <li role="presentation" ng-class="txTransferV2Data.isMultisig?\'\':\'active\'" ng-click="selectTab(\'normal\')"><a href="#">Normal</a></li>\n' +
    '        <li role="presentation" ng-class="txTransferV2Data.isMultisig?\'active\':\'\'" ng-click="selectTab(\'multisig\')"><a href="#">Multisig</a></li>\n' +
    '    </ul>\n' +
    '\n' +
    '    <form name="formtransfer2">\n' +
    '        <div ng-show="txTransferV2Data.isMultisig">\n' +
    '            <label for="multisigAccount">Multisig account</label>\n' +
    '            <select class="form-control"\n' +
    '                    ng-options="acc.address for acc in walletScope.accountData.meta.cosignatoryOf track by acc.address"\n' +
    '                    ng-model="txTransferV2Data.multisigAccount"\n' +
    '                    ng-change="updateCurrentAccountMosaics()"\n' +
    '                    id="multisigAccount">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '\n' +
    '        <div ng-show="common.requiresKey">\n' +
    '            <div ng-hide="walletScope.walletAccount.brain" class="form-group" ng-class="{\'has-error\':common.privatekey.length===0 || invalidKeyOrPassword}">\n' +
    '                <label for="privatekey"><span ng-show="txTransferV2Data.isMultisig">Signer\'s</span> Private Key</label>\n' +
    '                <input type="password" class="form-control" ng-model="common.privatekey" id="privatekey" placeholder="">\n' +
    '                <span ng-show="invalidKeyOrPassword" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign">Key does not correspond to the account</span></span>\n' +
    '            </div>\n' +
    '            <div ng-show="walletScope.walletAccount.brain" class="form-group" ng-class="{\'has-error\':common.password.length===0 || invalidKeyOrPassword}">\n' +
    '                <label for="password">Password</label>\n' +
    '                <input type="password" class="form-control" ng-model="common.password" id="password" placeholder="">\n' +
    '                <span ng-show="invalidKeyOrPassword" class="text-danger"><span class="glyphicon glyphicon-exclamation-sign"></span>Invalid password.</span>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group"  ng-class="{\'has-error\':formtransfer2.recipient.$error.addressField}">\n' +
    '            <label for="recipient">Recipient\'s address</label>\n' +
    '            <input autofocus="autofocus" type="text" class="form-control" ng-model="txTransferV2Data.recipient" name="recipient" id="recipient" placeholder="TBLOOD-PLWOWM-Z2TARX-4RFPOS-OWLULH-XMROBN-2WXI" address-field>\n' +
    '            <span ng-show="formtransfer2.recipient.$error.addressField">Not a valid address</span>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label>Fee</label>\n' +
    '            <!--\n' +
    '            <input type="number" class="form-control" ng-model="txTransferV2Data.fee" id="fee" placeholder="4">\n' +
    '            -->\n' +
    '            <div>\n' +
    '                {{(txTransferV2Data.fee | fmtNemValue)[0]}}.{{(txTransferV2Data.fee | fmtNemValue)[1]}}\n' +
    '                <span ng-show="txTransferV2Data.isMultisig">+ {{(txTransferV2Data.innerFee | fmtNemValue)[0]}}.{{(txTransferV2Data.innerFee | fmtNemValue)[1]}}</span>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="due">Due</label>\n' +
    '            <input type="number" class="form-control" ng-model="txTransferV2Data.due" id="due" placeholder="60">\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="multiplier">Multiplier</label>\n' +
    '            <input type="number" class="form-control" ng-model="txTransferV2Data.multiplier" id="multiplier" placeholder="1">\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="message">Message</label>\n' +
    '            <textarea class="form-control" ng-model="txTransferV2Data.message" id="message" rows="3"></textarea>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-horizontal">\n' +
    '            <div class="form-group">\n' +
    '                <label class="col-sm-3" for="mosaic">Attach mosaic</label>\n' +
    '                <select class="col-sm-7 form-control-static"\n' +
    '                        ng-options="mosaicName for mosaicName in currentAccountMosaicNames"\n' +
    '                        ng-model="selectedMosaic"\n' +
    '                        required="required"\n' +
    '                        id="mosaic">\n' +
    '                </select>\n' +
    '                <div class="col-sm-2">\n' +
    '                    <button type="button" class="btn btn-primary" ng-click="attachMosaic()">Attach</button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div ng-repeat="mos in txTransferV2Data.mosaics">\n' +
    '                <div class="form-group">\n' +
    '                    <div class="col-sm-1"><p class="form-control-static"><a ng-click="removeMosaic($index)" ><span class="glyphicon glyphicon-remove"></span></a></p></div>\n' +
    '                    <label class="col-sm-2 control-label">Mosaic:</label>\n' +
    '                    <div class="col-sm-9"><p class="form-control-static"><span class="text-muted">{{mos.mosaicId.namespaceId}}</span>:{{mos.mosaicId.name}}</p></div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group">\n' +
    '                    <div class="col-sm-1"><p class="form-control-static">&nbsp;</p></div>\n' +
    '                    <label class="col-sm-2 control-label">Amount</label>\n' +
    '                    <div class="col-sm-5"><input id="{{mos.gid}}" type="number" class="form-control" ng-model="mos.quantity" placeholder="1"></div>\n' +
    '                    <div class="col-sm-4"><p class="form-control-static">\n' +
    '                        <strong>{{(mos.quantity | fmtSupply:mos.mosaicId:walletScope.mosaicDefinitionMetaDataPair)[0]}}</strong>\n' +
    '                        <span class="text-muted">.{{(mos.quantity | fmtSupply:mos.mosaicId:walletScope.mosaicDefinitionMetaDataPair)[1]}}</span>\n' +
    '                    </p></div>\n' +
    '                </div>\n' +
    '\n' +
    '                <taglevy mos="mos" tx="txTransferV2Data" mosaics="walletScope.mosaicDefinitionMetaDataPair">\n' +
    '                    <div class="form-group" ng-show="levy.type">\n' +
    '                        <div class="col-sm-1"><p class="form-control-static">&nbsp;</p></div>\n' +
    '                        <label class="col-sm-2 control-label">Levy</label>\n' +
    '                        <div class="col-sm-9"><p class="form-control-static">\n' +
    '                            <span ng-show="levy.type === 1">constant:</span>\n' +
    '                            <span ng-show="levy.type === 2">percentage-based:</span>\n' +
    '                            <strong>{{mos | fmtLevyFee:tx.amount:levy:mosaics}}</strong>\n' +
    '                            <span class="text-muted">{{levy.mosaicId.namespaceId}}</span>:{{levy.mosaicId.name}}\n' +
    '                        </p></div>\n' +
    '                    </div>\n' +
    '                </taglevy>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '    <span ng-show="invalidKeyOrPassword" class="text-danger glyphicon glyphicon-exclamation-sign"></span>\n' +
    '    <button class="btn btn-primary" type="button" ng-disabled="okPressed || common.requiresKey && common.privatekey.length === 0 && common.password.length === 0" ng-click="ok()">Send</button>\n' +
    '    <button class="btn btn-warning" type="button" ng-click="cancel()">Cancel</button>\n' +
    '</div>\n' +
    '');
  $templateCache.put('views/wallet.html',
    '<div ng-show="name">\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-9">\n' +
    '                <h2>Wallet {{name}} </h2>\n' +
    '            </div>\n' +
    '            <div class="col-md-3">\n' +
    '                <p ng-class="{\'connecting\':\'bg-warning\', \'connected\':\'bg-success\'}[connectionStatus]">{{connectionStatus}} <span ng-show="nisHeight">(height: {{nisHeight}})</span></p>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-3">Address: {{foo}}</div>\n' +
    '            <div class="col-md-9"><strong>{{accountData.account.address | fmtAddress}}</strong></div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-3">Public key:</div>\n' +
    '            <div class="col-md-9">{{accountData.account.publicKey}}</div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-3">Importance:</div>\n' +
    '            <div class="col-md-9">{{(accountData.account.importance | fmtNemImportanceScore)[0]}} .\n' +
    '                <span class="text-muted">{{(accountData.account.importance | fmtNemImportanceScore)[1]}}</span>\n' +
    '                <span class="text-muted"> * 10<sup>(-5)</sup></span>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-3">Vested balance:</div>\n' +
    '            <div class="col-md-9">{{(accountData.account.vestedBalance | fmtNemValue)[0]}}\n' +
    '                <span class="text-muted">{{(accountData.account.vestedBalance | fmtNemValue)[1]}}</span></div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-3">Balance:</div>\n' +
    '            <div class="col-md-9"><strong>{{(accountData.account.balance | fmtNemValue)[0]}}</strong>\n' +
    '                <span class="text-muted">{{(accountData.account.balance | fmtNemValue)[1]}}</span></div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-3">Harvested blocks:</div>\n' +
    '            <div class="col-md-9">{{accountData.account.harvestedBlocks}}</div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-3">Different mosaics owned:</div>\n' +
    '            <div class="col-md-9">{{mosaicDefinitionMetaDataPairSize}} (includes mosaics owned by multisig accounts)</div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row">\n' +
    '            <hr>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="wrapper">\n' +
    '\n' +
    '    <div>\n' +
    '        <button ng-click="displayTransferDialog()" type="button" class="btn btn-primary">\n' +
    '            <span class="glyphicon glyphicon-send"></span> Plain Transfer Transaction</button>\n' +
    '        <button ng-click="displayTransferV2Dialog()" type="button" class="btn btn-primary">\n' +
    '            <span class="glyphicon glyphicon-globe"></span> Transfer Transaction with Mosaics</button>\n' +
    '        <button ng-click="displayNamespaceDialog()" type="button" class="btn btn-primary">\n' +
    '            <span class="glyphicon glyphicon-grain"></span> Provision Namespace Transaction</button>\n' +
    '        <button ng-click="displayMosaicDialog()" type="button" class="btn btn-primary" ng-disabled="(accountData.account === undefined || namespaceOwned[accountData.account.address] === undefined)">\n' +
    '            <span class="glyphicon glyphicon-globe"></span> Mosaic Definition Transaction</button>\n' +
    '        <button ng-click="displayMosaicSupplyDialog()" type="button" class="btn btn-primary" ng-disabled="(accountData.account === undefined || mosaicOwnedSize[accountData.account.address] < 2)">\n' +
    '            <span class="glyphicon glyphicon-asterisk"></span> Mosaic Supply Transaction</button>\n' +
    '    </div>\n' +
    '\n' +
    '    <div>\n' +
    '        <hr>\n' +
    '    </div>\n' +
    '\n' +
    '    <div>\n' +
    '        <ul class="nav nav-tabs">\n' +
    '            <li role="presentation" ng-class="activeWalletTab === 0?\'active\':\'\' " ng-click="setWalletTab(0)"><a href="#">Transactions</a></li>\n' +
    '            <li role="presentation" ng-class="activeWalletTab === 1?\'active\':\'\' " ng-click="setWalletTab(1)"><a href="#">Mosaics</a></li>\n' +
    '            <li role="presentation" ng-class="activeWalletTab === 2?\'active\':\'\' " ng-click="setWalletTab(2)"><a href="#">Namespaces</a></li>\n' +
    '        </ul>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '    <div class="container-fluid" ng-show="activeWalletTab === 0">\n' +
    '        <div class="row">\n' +
    '            <div class="col-lg-6">\n' +
    '                <h3>Unconfirmed transactions</h3>\n' +
    '                <table class="table table-bordered table-hover table-striped table-condensed">\n' +
    '                    <tbody>\n' +
    '                        <tr class="animated-txes" ng-repeat="tx in unconfirmed">\n' +
    '                            <td>\n' +
    '                                <!-- We need to pass accountData from Controller\'s scope into transaction directive scope -->\n' +
    '                                <tagtransaction d="tx" tooltip-position="\'right\'" account-data="accountData"></tagtransaction>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </tbody>\n' +
    '                </table>\n' +
    '            </div>\n' +
    '            <div class="col-lg-6">\n' +
    '                <h3>Recent transactions</h3>\n' +
    '                <table class="table table-bordered table-hover table-striped table-condensed">\n' +
    '                    <tbody>\n' +
    '                    <tr class="animated-txes" ng-repeat="tx in transactions | orderBy:\'-\'">\n' +
    '                        <td>\n' +
    '                            <tagtransaction d="tx" tooltip-position="\'left\'"></tagtransaction>\n' +
    '                        </td>\n' +
    '                    </tr>\n' +
    '                    </tbody>\n' +
    '                </table>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="container-fluid" ng-show="activeWalletTab === 1">\n' +
    '        Mosaics owned by this account:\n' +
    '        <table class="table table-hover">\n' +
    '            <thead>\n' +
    '                <tr>\n' +
    '                    <th width="30%">Mosaic</th>\n' +
    '                    <th>Quantity</th>\n' +
    '                    <th>Levy</th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat="mos in mosaicOwned[accountData.account.address]">\n' +
    '                    <td><span class="text-muted">{{mos.mosaicId.namespaceId}}</span>:{{mos.mosaicId.name}}</td>\n' +
    '                    <td><strong>{{(mos.quantity | fmtSupply:mos.mosaicId:mosaicDefinitionMetaDataPair)[0]}}</strong><span class="text-muted">.{{(mos.quantity | fmtSupply:mos.mosaicId:mosaicDefinitionMetaDataPair)[1]}}</span></td>\n' +
    '                    <td>\n' +
    '                        <taglevy mos="mos" tx="tx" mosaics="mosaicDefinitionMetaDataPair">\n' +
    '                            <span ng-show="levy.type">\n' +
    '                                <span class="text-muted">\n' +
    '                                    {{levy.mosaicId.namespaceId}}:{{levy.mosaicId.name}}\n' +
    '                                </span>\n' +
    '                                <span ng-show="levy.type === 1">constant:\n' +
    '                                    ({{mos | fmtLevyFee:tx.amount:levy:mosaics}})\n' +
    '                                </span>\n' +
    '                                <span ng-show="levy.type === 2">percentage-based:\n' +
    '                                    (x{{(levy.fee / 10000).toFixed(4)}})\n' +
    '                                </span>\n' +
    '                            </span>\n' +
    '                        </taglevy>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '\n' +
    '        <div class="container-fluid" ng-show="activeWalletTab === 2">\n' +
    '            Namespaces owned by this account:\n' +
    '            <table class="table table-hover">\n' +
    '                <thead>\n' +
    '                <tr>\n' +
    '                    <th width="30%">Namespace</th>\n' +
    '                    <th>Height (Expires)</th>\n' +
    '                    <th>Owner</th>\n' +
    '                </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                <tr ng-repeat="namespace in namespaceOwned[accountData.account.address]">\n' +
    '                    <td>{{namespace.fqn}}</td>\n' +
    '                    <td>{{namespace.height}} ({{(namespace.height + 365 * 1440)}})</td>\n' +
    '                    <td>{{namespace.owner | fmtAddress}}</td>\n' +
    '                </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '\n' +
    '            Namespaces owned by multisig accounts:\n' +
    '            <table class="table table-hover">\n' +
    '                <thead>\n' +
    '                <tr>\n' +
    '                    <th width="30%">Namespace</th>\n' +
    '                    <th>Height (Expires)</th>\n' +
    '                    <th>Owner</th>\n' +
    '                </tr>\n' +
    '                </thead>\n' +
    '                <tbody ng-repeat="multisig in accountData.meta.cosignatoryOf">\n' +
    '                    <tr ng-repeat="namespace in namespaceOwned[multisig.address]">\n' +
    '                        <td>{{namespace.fqn}}</td>\n' +
    '                        <td>{{namespace.height}} ({{(namespace.height + 365 * 1440)}})</td>\n' +
    '                        <td>{{namespace.owner | fmtAddress}}</td>\n' +
    '                    </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
  $templateCache.put('template/modal/backdrop.html',
    '<div uib-modal-animation-class="fade"\n' +
    '     modal-in-class="in"\n' +
    '     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n' +
    '></div>\n' +
    '');
  $templateCache.put('template/modal/window.html',
    '<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n' +
    '    uib-modal-animation-class="fade"\n' +
    '    modal-in-class="in"\n' +
    '    ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}">\n' +
    '    <div class="modal-dialog" ng-class="size ? \'modal-\' + size : \'\'"><div class="modal-content" uib-modal-transclude></div></div>\n' +
    '</div>\n' +
    '');
}]);
});