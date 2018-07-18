export default {
  repositories: [
    "my-ubuntu",
    "your-ubuntu"
  ],
  tags: [{
      "name": "my-ubuntu",
      "tags": [
        "v1"
      ]
    },
    {
      "name": "your-ubuntu",
      "tags": [
        "v1"
      ]
    }
  ],
  manifests: [{
    "schemaVersion": 1,
    "name": "my-ubuntu",
    "tag": "v1",
    "architecture": "amd64",
    "fsLayers": [{
        "blobSum": "sha256:a3ed95caeb02ffe68cdd9fd84406680ae93d633cb16422d00e8a7c22955b46d4"
      },
      {
        "blobSum": "sha256:f6c9c6de41905e9a66f2bc2c4a19858c8dc5b0a94f01e03eafc719afe25888aa"
      },
      {
        "blobSum": "sha256:43ae2841ad7a7fd1aeae30028105cac7f6ee0ec955e5229e52b3333fea3c17b5"
      },
      {
        "blobSum": "sha256:5ba5bbeb6b91e2676c98255c6babc66d7b05cac40185eeba4b3773199c701da0"
      },
      {
        "blobSum": "sha256:55172d420b43cf03feeec11bcc917c7ddfc192036102e065ab57aa9abb95311e"
      },
      {
        "blobSum": "sha256:b234f539f7a1d65eabae1617e63c81ac01768abffd48b5cbbf7166efca6a3429"
      }
    ],
    "history": [{
        "v1Compatibility": "{\"architecture\":\"amd64\",\"config\":{\"Hostname\":\"\",\"Domainname\":\"\",\"User\":\"\",\"AttachStdin\":false,\"AttachStdout\":false,\"AttachStderr\":false,\"Tty\":false,\"OpenStdin\":false,\"StdinOnce\":false,\"Env\":[\"PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\"],\"Cmd\":[\"/bin/bash\"],\"ArgsEscaped\":true,\"Image\":\"sha256:4b3005ce3f6ee74434a4392b85057e8d2a6e626975c11bedb7a2190c65fb48b9\",\"Volumes\":null,\"WorkingDir\":\"\",\"Entrypoint\":null,\"OnBuild\":null,\"Labels\":null},\"container\":\"5db301f2c5d6bd57ecc26c536b10e338240f94b85458351eea2f33590359d656\",\"container_config\":{\"Hostname\":\"5db301f2c5d6\",\"Domainname\":\"\",\"User\":\"\",\"AttachStdin\":false,\"AttachStdout\":false,\"AttachStderr\":false,\"Tty\":false,\"OpenStdin\":false,\"StdinOnce\":false,\"Env\":[\"PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\"],\"Cmd\":[\"/bin/sh\",\"-c\",\"#(nop) \",\"CMD [\\\"/bin/bash\\\"]\"],\"ArgsEscaped\":true,\"Image\":\"sha256:4b3005ce3f6ee74434a4392b85057e8d2a6e626975c11bedb7a2190c65fb48b9\",\"Volumes\":null,\"WorkingDir\":\"\",\"Entrypoint\":null,\"OnBuild\":null,\"Labels\":{}},\"created\":\"2018-06-05T21:21:55.789179453Z\",\"docker_version\":\"17.06.2-ce\",\"id\":\"6e422b1b463adeea5be3bfea0ce2e1f9ad04c346160ca2991e0ecf04db8b3686\",\"os\":\"linux\",\"parent\":\"63474e4f284246627661f2a907be11843336ec39298d1962216f25f16ad96d78\",\"throwaway\":true}"
      },
      {
        "v1Compatibility": "{\"id\":\"63474e4f284246627661f2a907be11843336ec39298d1962216f25f16ad96d78\",\"parent\":\"f7fdafe228d3d466328e02f1110651ae89b42cc67b19b5eb7252d8450fe3648a\",\"created\":\"2018-06-05T21:21:55.559734528Z\",\"container_config\":{\"Cmd\":[\"/bin/sh -c mkdir -p /run/systemd \\u0026\\u0026 echo 'docker' \\u003e /run/systemd/container\"]}}"
      },
      {
        "v1Compatibility": "{\"id\":\"f7fdafe228d3d466328e02f1110651ae89b42cc67b19b5eb7252d8450fe3648a\",\"parent\":\"8475d7efa2f0c5263c01f6a654db3b5693386cad500c82a825670edb51955305\",\"created\":\"2018-06-05T21:21:54.883506595Z\",\"container_config\":{\"Cmd\":[\"/bin/sh -c sed -i 's/^#\\\\s*\\\\(deb.*universe\\\\)$/\\\\1/g' /etc/apt/sources.list\"]}}"
      },
      {
        "v1Compatibility": "{\"id\":\"8475d7efa2f0c5263c01f6a654db3b5693386cad500c82a825670edb51955305\",\"parent\":\"565220263a7cbd2b05a2e76411a3af38073e44c00e8691852e4803a7b9943996\",\"created\":\"2018-06-05T21:21:54.199485999Z\",\"container_config\":{\"Cmd\":[\"/bin/sh -c rm -rf /var/lib/apt/lists/*\"]}}"
      },
      {
        "v1Compatibility": "{\"id\":\"565220263a7cbd2b05a2e76411a3af38073e44c00e8691852e4803a7b9943996\",\"parent\":\"7d614f18edc3c55b1d7b39f0cd747b3edeab1117daed194597315992b4f73f83\",\"created\":\"2018-06-05T21:21:53.543957497Z\",\"container_config\":{\"Cmd\":[\"/bin/sh -c set -xe \\t\\t\\u0026\\u0026 echo '#!/bin/sh' \\u003e /usr/sbin/policy-rc.d \\t\\u0026\\u0026 echo 'exit 101' \\u003e\\u003e /usr/sbin/policy-rc.d \\t\\u0026\\u0026 chmod +x /usr/sbin/policy-rc.d \\t\\t\\u0026\\u0026 dpkg-divert --local --rename --add /sbin/initctl \\t\\u0026\\u0026 cp -a /usr/sbin/policy-rc.d /sbin/initctl \\t\\u0026\\u0026 sed -i 's/^exit.*/exit 0/' /sbin/initctl \\t\\t\\u0026\\u0026 echo 'force-unsafe-io' \\u003e /etc/dpkg/dpkg.cfg.d/docker-apt-speedup \\t\\t\\u0026\\u0026 echo 'DPkg::Post-Invoke { \\\"rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true\\\"; };' \\u003e /etc/apt/apt.conf.d/docker-clean \\t\\u0026\\u0026 echo 'APT::Update::Post-Invoke { \\\"rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true\\\"; };' \\u003e\\u003e /etc/apt/apt.conf.d/docker-clean \\t\\u0026\\u0026 echo 'Dir::Cache::pkgcache \\\"\\\"; Dir::Cache::srcpkgcache \\\"\\\";' \\u003e\\u003e /etc/apt/apt.conf.d/docker-clean \\t\\t\\u0026\\u0026 echo 'Acquire::Languages \\\"none\\\";' \\u003e /etc/apt/apt.conf.d/docker-no-languages \\t\\t\\u0026\\u0026 echo 'Acquire::GzipIndexes \\\"true\\\"; Acquire::CompressionTypes::Order:: \\\"gz\\\";' \\u003e /etc/apt/apt.conf.d/docker-gzip-indexes \\t\\t\\u0026\\u0026 echo 'Apt::AutoRemove::SuggestsImportant \\\"false\\\";' \\u003e /etc/apt/apt.conf.d/docker-autoremove-suggests\"]}}"
      },
      {
        "v1Compatibility": "{\"id\":\"7d614f18edc3c55b1d7b39f0cd747b3edeab1117daed194597315992b4f73f83\",\"created\":\"2018-06-05T21:21:52.734509731Z\",\"container_config\":{\"Cmd\":[\"/bin/sh -c #(nop) ADD file:d37ff24540ea7700d0fc053e1996b234428a88f3a324d7fcbd83d8ef95318040 in / \"]}}"
      }
    ],
    "signatures": [{
      "header": {
        "jwk": {
          "crv": "P-256",
          "kid": "2LFY:OGQD:MRZ5:BAOF:NE5F:PXXP:BYAY:DRNR:RAA3:G7NI:IZCV:Q3FS",
          "kty": "EC",
          "x": "w3tcnH54rbEVfpKFN6UhMK_TEiLt2Jh7LDWDeQTeqn8",
          "y": "Y1zzyncsbtuY36cpedqLWydJjzdqQYmW1E4EC7nXtYs"
        },
        "alg": "ES256"
      },
      "signature": "euUrF-YS15uQKcse7g5m-dCHh43uGKHpwWp4S3T8y1f4DJnmys5v1i4bN6XeoZlLlf6s5cdrQlCllbIAPxUT7Q",
      "protected": "eyJmb3JtYXRMZW5ndGgiOjUzOTgsImZvcm1hdFRhaWwiOiJDbjAiLCJ0aW1lIjoiMjAxOC0wNy0xN1QwNToyODozMFoifQ"
    }]
  }, {
    "schemaVersion": 1,
    "name": "your-ubuntu",
    "tag": "v1",
    "architecture": "amd64",
    "fsLayers": [{
        "blobSum": "sha256:a3ed95caeb02ffe68cdd9fd84406680ae93d633cb16422d00e8a7c22955b46d4"
      },
      {
        "blobSum": "sha256:f6c9c6de41905e9a66f2bc2c4a19858c8dc5b0a94f01e03eafc719afe25888aa"
      },
      {
        "blobSum": "sha256:43ae2841ad7a7fd1aeae30028105cac7f6ee0ec955e5229e52b3333fea3c17b5"
      },
      {
        "blobSum": "sha256:5ba5bbeb6b91e2676c98255c6babc66d7b05cac40185eeba4b3773199c701da0"
      },
      {
        "blobSum": "sha256:55172d420b43cf03feeec11bcc917c7ddfc192036102e065ab57aa9abb95311e"
      },
      {
        "blobSum": "sha256:b234f539f7a1d65eabae1617e63c81ac01768abffd48b5cbbf7166efca6a3429"
      }
    ],
    "history": [{
        "v1Compatibility": "{\"architecture\":\"amd64\",\"config\":{\"Hostname\":\"\",\"Domainname\":\"\",\"User\":\"\",\"AttachStdin\":false,\"AttachStdout\":false,\"AttachStderr\":false,\"Tty\":false,\"OpenStdin\":false,\"StdinOnce\":false,\"Env\":[\"PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\"],\"Cmd\":[\"/bin/bash\"],\"ArgsEscaped\":true,\"Image\":\"sha256:4b3005ce3f6ee74434a4392b85057e8d2a6e626975c11bedb7a2190c65fb48b9\",\"Volumes\":null,\"WorkingDir\":\"\",\"Entrypoint\":null,\"OnBuild\":null,\"Labels\":null},\"container\":\"5db301f2c5d6bd57ecc26c536b10e338240f94b85458351eea2f33590359d656\",\"container_config\":{\"Hostname\":\"5db301f2c5d6\",\"Domainname\":\"\",\"User\":\"\",\"AttachStdin\":false,\"AttachStdout\":false,\"AttachStderr\":false,\"Tty\":false,\"OpenStdin\":false,\"StdinOnce\":false,\"Env\":[\"PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\"],\"Cmd\":[\"/bin/sh\",\"-c\",\"#(nop) \",\"CMD [\\\"/bin/bash\\\"]\"],\"ArgsEscaped\":true,\"Image\":\"sha256:4b3005ce3f6ee74434a4392b85057e8d2a6e626975c11bedb7a2190c65fb48b9\",\"Volumes\":null,\"WorkingDir\":\"\",\"Entrypoint\":null,\"OnBuild\":null,\"Labels\":{}},\"created\":\"2018-06-05T21:21:55.789179453Z\",\"docker_version\":\"17.06.2-ce\",\"id\":\"6e422b1b463adeea5be3bfea0ce2e1f9ad04c346160ca2991e0ecf04db8b3686\",\"os\":\"linux\",\"parent\":\"63474e4f284246627661f2a907be11843336ec39298d1962216f25f16ad96d78\",\"throwaway\":true}"
      },
      {
        "v1Compatibility": "{\"id\":\"63474e4f284246627661f2a907be11843336ec39298d1962216f25f16ad96d78\",\"parent\":\"f7fdafe228d3d466328e02f1110651ae89b42cc67b19b5eb7252d8450fe3648a\",\"created\":\"2018-06-05T21:21:55.559734528Z\",\"container_config\":{\"Cmd\":[\"/bin/sh -c mkdir -p /run/systemd \\u0026\\u0026 echo 'docker' \\u003e /run/systemd/container\"]}}"
      },
      {
        "v1Compatibility": "{\"id\":\"f7fdafe228d3d466328e02f1110651ae89b42cc67b19b5eb7252d8450fe3648a\",\"parent\":\"8475d7efa2f0c5263c01f6a654db3b5693386cad500c82a825670edb51955305\",\"created\":\"2018-06-05T21:21:54.883506595Z\",\"container_config\":{\"Cmd\":[\"/bin/sh -c sed -i 's/^#\\\\s*\\\\(deb.*universe\\\\)$/\\\\1/g' /etc/apt/sources.list\"]}}"
      },
      {
        "v1Compatibility": "{\"id\":\"8475d7efa2f0c5263c01f6a654db3b5693386cad500c82a825670edb51955305\",\"parent\":\"565220263a7cbd2b05a2e76411a3af38073e44c00e8691852e4803a7b9943996\",\"created\":\"2018-06-05T21:21:54.199485999Z\",\"container_config\":{\"Cmd\":[\"/bin/sh -c rm -rf /var/lib/apt/lists/*\"]}}"
      },
      {
        "v1Compatibility": "{\"id\":\"565220263a7cbd2b05a2e76411a3af38073e44c00e8691852e4803a7b9943996\",\"parent\":\"7d614f18edc3c55b1d7b39f0cd747b3edeab1117daed194597315992b4f73f83\",\"created\":\"2018-06-05T21:21:53.543957497Z\",\"container_config\":{\"Cmd\":[\"/bin/sh -c set -xe \\t\\t\\u0026\\u0026 echo '#!/bin/sh' \\u003e /usr/sbin/policy-rc.d \\t\\u0026\\u0026 echo 'exit 101' \\u003e\\u003e /usr/sbin/policy-rc.d \\t\\u0026\\u0026 chmod +x /usr/sbin/policy-rc.d \\t\\t\\u0026\\u0026 dpkg-divert --local --rename --add /sbin/initctl \\t\\u0026\\u0026 cp -a /usr/sbin/policy-rc.d /sbin/initctl \\t\\u0026\\u0026 sed -i 's/^exit.*/exit 0/' /sbin/initctl \\t\\t\\u0026\\u0026 echo 'force-unsafe-io' \\u003e /etc/dpkg/dpkg.cfg.d/docker-apt-speedup \\t\\t\\u0026\\u0026 echo 'DPkg::Post-Invoke { \\\"rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true\\\"; };' \\u003e /etc/apt/apt.conf.d/docker-clean \\t\\u0026\\u0026 echo 'APT::Update::Post-Invoke { \\\"rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true\\\"; };' \\u003e\\u003e /etc/apt/apt.conf.d/docker-clean \\t\\u0026\\u0026 echo 'Dir::Cache::pkgcache \\\"\\\"; Dir::Cache::srcpkgcache \\\"\\\";' \\u003e\\u003e /etc/apt/apt.conf.d/docker-clean \\t\\t\\u0026\\u0026 echo 'Acquire::Languages \\\"none\\\";' \\u003e /etc/apt/apt.conf.d/docker-no-languages \\t\\t\\u0026\\u0026 echo 'Acquire::GzipIndexes \\\"true\\\"; Acquire::CompressionTypes::Order:: \\\"gz\\\";' \\u003e /etc/apt/apt.conf.d/docker-gzip-indexes \\t\\t\\u0026\\u0026 echo 'Apt::AutoRemove::SuggestsImportant \\\"false\\\";' \\u003e /etc/apt/apt.conf.d/docker-autoremove-suggests\"]}}"
      },
      {
        "v1Compatibility": "{\"id\":\"7d614f18edc3c55b1d7b39f0cd747b3edeab1117daed194597315992b4f73f83\",\"created\":\"2018-06-05T21:21:52.734509731Z\",\"container_config\":{\"Cmd\":[\"/bin/sh -c #(nop) ADD file:d37ff24540ea7700d0fc053e1996b234428a88f3a324d7fcbd83d8ef95318040 in / \"]}}"
      }
    ],
    "signatures": [{
      "header": {
        "jwk": {
          "crv": "P-256",
          "kid": "2LFY:OGQD:MRZ5:BAOF:NE5F:PXXP:BYAY:DRNR:RAA3:G7NI:IZCV:Q3FS",
          "kty": "EC",
          "x": "w3tcnH54rbEVfpKFN6UhMK_TEiLt2Jh7LDWDeQTeqn8",
          "y": "Y1zzyncsbtuY36cpedqLWydJjzdqQYmW1E4EC7nXtYs"
        },
        "alg": "ES256"
      },
      "signature": "xgS7BTSkGXn0iawi8cslIh-Fo-P9kDGhs4aokmguMDatbe6-yTCmVvZGbYxrgByWjXkK0Vxc5Yzd5Kci4ZPeuw",
      "protected": "eyJmb3JtYXRMZW5ndGgiOjU0MDAsImZvcm1hdFRhaWwiOiJDbjAiLCJ0aW1lIjoiMjAxOC0wNy0xN1QwNTozMjozMloifQ"
    }]
  }]
}
