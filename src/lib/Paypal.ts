export class Paypal {
    private url: string = "";
    constructor() {
        switch (import.meta.env.VITE_APP_ENVIRONMENT) {
            case "development":
                this.setUrl("/completed");
                break;
            case "production":
                this.setUrl(import.meta.env.VITE_PAYPAL_DONATE_URL as string);
                break;
            default:
                this.setUrl("/completed");
                break;
        }
    }

    public getUrl(): string {
        return this.url;
    }

    public setUrl(url: string): void {
        this.url = url;
    }
}