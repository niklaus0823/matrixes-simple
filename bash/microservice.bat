@echo on
cd ..
SET DEBUG=matrix:*
SET ROOT=%cd%
SET PROTO_ROOT=./proto
SET PROTO_3RD=./proto_modules
SET OUTPUT=./src
SET BUILD=./build

SET IS_GATEWAY=false
SET IS_MICROSERVICE=true

echo "***********************"
echo "Working dir: %ROOT%
echo "Proto dir: %PROTO_ROOT%"
echo "Proto 3rd dir: %PROTO_3RD%"
echo "Output dir: %OUTPUT%"

echo "***********************"
echo "Delete dir: %OUTPUT%/proto"
rm -rf %OUTPUT%/proto

echo "***********************"
echo "Generate js codes ..."
call matrix proto --proto=%PROTO_ROOT% --output=%OUTPUT% --import=%PROTO_3RD% --javascript --all

echo "Generate d.ts codes ..."
call matrix proto --proto=%PROTO_ROOT% --output=%OUTPUT% --import=%PROTO_3RD% --exclude=%PROTO_3RD%/google --typescript --all

echo "Generate grpc client code ..."
call matrix grpc --proto=%PROTO_ROOT% --output=%OUTPUT% --import=%PROTO_3RD% --exclude=%PROTO_3RD%/google --client

if %IS_GATEWAY% equ true (
    echo "Delete old gateway router code ..."
    rm -rf %OUTPUT%/router

    echo "Generate gateway router codes ..."
    call matrix grpc --proto=%PROTO_ROOT% --output=%OUTPUT% --import=%PROTO_3RD% --exclude=%PROTO_3RD%/google,%PROTO_3RD%/kafka,%PROTO_3RD%/memcached --gateway
)

if %IS_MICROSERVICE% equ true (
    echo "Delete old microservice service code ..."
    rm -rf %OUTPUT%/services

    echo "Generate microservice service codes ..."
    call matrix grpc --proto=%PROTO_ROOT% --output=%OUTPUT% --import=%PROTO_3RD% --exclude=%PROTO_3RD%/google,%PROTO_3RD%/kafka,%PROTO_3RD%/memcached --server
)

echo "***********************"
echo "Delete dir: %BUILD%/proto"
rm -rf %BUILD%/proto

echo "Copy proto dir to %BUILD%/proto ..."
echo D |xcopy "%OUTPUT%/proto" "%BUILD%/proto" /s /e