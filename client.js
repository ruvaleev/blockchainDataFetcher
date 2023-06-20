const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = '../../protos/blockchain_data_fetcher.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const tokenProto = grpc.loadPackageDefinition(packageDefinition).BlockchainDataFetcher;

function main() {
  const client = new tokenProto('localhost:50051', grpc.credentials.createInsecure());
  // console.log(client)
  // const user = process.argv[2];
  '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1'
  '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8'
  // client.GetTokenData({'address': '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9'}, (err, response) => {
  client.GetTokenData({'address': '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8'}, (err, response) => {
    console.log('Response');
    console.log(response);
    console.log('Err');
    console.log(err);
  });
}

main();
