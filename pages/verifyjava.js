export class checkjava {

    constructor(page) {

        this.page = page;
        
        this.selectjava = page.locator("//label[normalize-space()='Java']");

        this.verifyjavaonly = page.getByRole("")

    }
}