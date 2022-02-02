import dotenv from "dotenv";
dotenv.config();

const config = {
    fileSystem: {
        path: process.env.fileSystemPath
    },
    mongodb: {
        cnxStr: process.env.mongodb
    },
    firebase: {
        "type": process.env.firebaseType,
        "project_id": process.env.firebaseProject_id,
        "private_key_id": process.env.firebasePrivate_key_id,
        "private_key": process.env.firebasePrivate_key,
        "client_email": process.env.firebaseClient_email,
        "client_id": process.env.firebaseClient_id,
        "auth_uri": process.env.firebaseAuth_uri,
        "token_uri": process.env.firebaseToken_uri,
        "auth_provider_x509_cert_url": process.env.firebaseAuth_provider_x509_cert_url,
        "client_x509_cert_url": process.env.firebaseClient_x509_cert_url
      },
    sqlite3: {
        client: process.env.sqlite3Client,
        connection: {
            filename: process.env.sqlite3ConnectionFilename
        },
        useNullAsDefault: true
    },
    mariaDb: {
        client: process.env.mariaDbclient,
        connection: {
            host: process.env.mariaDbConnectionHost,
            user: process.env.mariaDbConnectionUser,
            password: process.env.mariaDbConnectionPassword,
            database: process.env.mariaDbConnectionDatabase
        }
    }
}

export default config;
