# nem-lightwallet

NEM JS-based lightwallet source code

Lightwallet can be run with any webserver of your choice, but
due to angular usage, few redirections are required:

    /lightwallet/wallet/* -> /lightwallet/index.html
    /lightwallet/login    -> /lightwallet/index.html
    /lightwallet          -> /lightwallet/index.html

all other request should be passed as-is.
