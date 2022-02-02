export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'mongodb+srv://charly:Charly12@cluster0.8xt8t.mongodb.net/ecommerce-nodejs?retryWrites=true&w=majority'
    },
    firebase: {
        "type": "service_account",
        "project_id": "ecommerce-nodejs-9e2f0",
        "private_key_id": "0f75fa7716074c5eaa4ac453e937e1c7b347e8f2",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQChP1CNSuAVQro2\nJlRu7UIK23DDx6rkkCeWisbNbYrGVbCrlS0UUlXOdAwAIZad7SWuoMamSclNXiHk\nxaV2nhU55pTOPcBe0LvviZzuvaW80qxVyfMrUNib2fDa3qVHIV3oO3veJUR9pKYh\nuTbQ4favjZ5Neo1EH2IRJxAhNiOpqNx+mPYe50mnZ/lP4WtBGkwUE3zXq1Y0oidW\nMeAQgqLg76fIQ0ZoXQ5bMKZeA5VMyqCgKnkT/1rpqnNTZAnbvF362dFYbCwy2+za\nwEaj5eUp8HXeT5DFM4rstc1u8YQUC6sutYr/Bj0dw+d8K9PoxYUfYR+MEZJ6hVQi\nhGdFPtIbAgMBAAECggEAAIX3iron3bYbCRDgeM+wdqRnNr8jX7DUsUp1jBiqrwQZ\nQTj+VSbvj+SoXjxbNXkT8MSbbL6UGQ3MAA4lsY4qPwI+fO0rw1kqiSFTR5jrWhaH\nGWwtNZ/uss0/uz66Mm+/DgsywwW58MsQFDHwiEug+vC4fVcc3S2oR74f3alEAvq1\n6f7Dwo7nPj2rObLC9Mbx3RUcHt9SY/wCi8Hw7a38tZTvr0lp/COS4/7C4OcZTW7T\nE+8qjJaZGTh+BvDl/Svyl2UIo6C+S+LADJKEH6DkMfl8wNUtnWi7tCpXaG/aYH8c\n8MdC00UrOxQ1n0RAraDWnKGtGCf3YggFyzJBGBmnGQKBgQDfPUdcVJyptNpm1cQ8\nUMzzTSGIiOCjflAolMQ6cG6f+KtRrW/Btk/ISrKz/+tA2CU16G1d4yqSWrpmBGKs\nPIaNMEWLZNj38cpj5sVXjyPNWopwlTf18IFDY782GBFcGA1riEdwenVYW3rUOqrZ\nZ6WqqK0aqWCFSQHvVqvGuOfyVQKBgQC46RnJ0u/aGmDY9LakzN5OSDocslg5Jg1m\nFV99KKbBOitLjy40CSabTKEA8Amjt546fjoSIpS4ez8ZkF44mIcdClvwt31CfvPM\n/F+SCxx73yZfFDcxgHy4tFTk6lQc0tnMmp0+cyq5UMz/40871APhlTALMrSRr8Zz\niBuuGh2CrwKBgGSfVl8DtGm6HwdjK0SUlwzDo23LZJXNBYyFIb3Fl9d7Wp1CM7F4\n35VENjB0FjHwOzWFQmajUjkNtB7vsxo3Xd6d93rRRgrcbYGCL0k8N8MEIIqGd+bf\nNSSO/U0ApDKClOn3T1wflmzxLvgiSYgc88tspDn0RpFNSxX6VwsHpWTRAoGAaKxz\nz78bzcA+8LHern3WnkPeuZ3vuTIkRZR1wJkBhMKT/arowcYoV6NSRQCcxFPOO1h3\nMQroW2JRPvxtieY2HideEm8cdkb9Zh27UCYAEtMomowMDnaoo7pZkFhiEwr9BgjE\nWLTDC7KEyZn4oWqMY+ebEcu7UflKAt6apLzd1bsCgYBisotyLJBVFSWYevE5FnCW\ncMzZ59I+J9I/hVsRSxHPEu6JrfHAA19+sGylFV3yuhTAGFOcldFZ/QJMvzDCF1Hm\nLjRxvAvP7PBEb5/65VaRgL3mDarO0pd5UuysgbOlVujkNWe4li2EGhvNrF7Y6E/r\nXzVdtpBKiGLf8hhrTLlVkQ==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-3j24t@ecommerce-nodejs-9e2f0.iam.gserviceaccount.com",
        "client_id": "106525810756182939953",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3j24t%40ecommerce-nodejs-9e2f0.iam.gserviceaccount.com"
      },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: `./DB/ecommerce.sqlite`
        },
        useNullAsDefault: true
    },
    mariaDb: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'coderhouse',
            password: 'coderhouse',
            database: 'coderhouse'
        }
    }
}
