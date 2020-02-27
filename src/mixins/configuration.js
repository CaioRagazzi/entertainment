import { HTTP } from "../plugins/axios";

export const configurationMixins = {
    data() {
        return {
            loadingConfig: true,
            configuration: undefined,
        }
    },
    created() {
        this.setConfiguration();
    },
    methods: {
        setConfiguration() {
            if (this.hasStorageConfiguration()) {
                this.configuration = JSON.parse(localStorage.config);
                this.loadingConfig = false;
            } else {
                HTTP.get("configuration").then(res => {
                    localStorage.setItem("config", JSON.stringify(res.data));
                    this.configuration = JSON.parse(localStorage.config);
                    this.loadingConfig = false;
                });
            }
        },
        hasStorageConfiguration() {
            return localStorage.config !== undefined;
        },
    }
}