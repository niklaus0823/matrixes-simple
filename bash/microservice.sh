#!/bin/bash
cd ..
DEBUG=matrix:*
ROOT=${PWD}
PROTO_ROOT=./proto
PROTO_3RD=./proto_modules
OUTPUT=./src

IS_GATEWAY=false
IS_MICROSERVICE=true

echo "***********************"
echo "Working dir: ${ROOT}"
echo "Proto dir: ${PROTO_ROOT}"
echo "Proto 3rd dir: ${PROTO_3RD}"
echo "Output dir: ${OUTPUT}"

echo "***********************"
echo "Delete dir: ${OUTPUT}/proto"
rm -rf ${OUTPUT}/proto

echo "***********************"
echo "Generate js codes ..."
matrix proto \
--proto=${PROTO_ROOT} \
--output=${OUTPUT} \
--import=${PROTO_3RD} \
--javascript \
--all

echo "Generate d.ts codes ..."
matrix proto \
--proto=${PROTO_ROOT} \
--output=${OUTPUT} \
--import=${PROTO_3RD} \
--typescript \
--exclude=${PROTO_3RD}/google \
--all

echo "Generate grpc client code ..."
matrix grpc \
--proto=${PROTO_ROOT} \
--output=${OUTPUT} \
--import=${PROTO_3RD} \
--exclude=${PROTO_3RD}/google \
--client

if [ "${IS_GATEWAY}" = true ] ; then
    echo "Delete old gateway router code ..."
    rm -rf ${OUTPUT}/router

    echo "Generate gateway router codes ..."
    matrix grpc \
    --proto=${PROTO_ROOT} \
    --output=${OUTPUT} \
    --import=${PROTO_3RD} \
    --exclude=${PROTO_3RD}/google,${PROTO_3RD}/kafka,${PROTO_3RD}/memcached \
    --gateway
fi

if [ "${IS_MICROSERVICE}" = true ] ; then
    echo "Delete old microservice service code ..."
    rm -rf ${OUTPUT}/services

    echo "Generate microservice service codes ..."
    matrix grpc \
    --proto=${PROTO_ROOT} \
    --output=${OUTPUT} \
    --import=${PROTO_3RD} \
    --exclude=${PROTO_3RD}/google,${PROTO_3RD}/kafka,${PROTO_3RD}/memcached \
    --server
fi

echo "***********************"
echo "Delete dir: %BUILD%/proto"
rm -rf %BUILD%/proto

echo "Copy proto dir to %BUILD%/proto ..."
cp -rf "%OUTPUT%/proto" "%BUILD%/proto"