var requireConfig = {
    "map": {},
    "paths": {
        "first-module": [
            "./first-module/amd-first.module"
        ],
        "second-module": [
            "./second-module/amd-second.module"
        ]
    },
    "deps": [
        "./amd-app"
    ]
};

requirejs.config(requireConfig);
