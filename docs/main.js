(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-form/app-form.component.html":
/*!**************************************************!*\
  !*** ./src/app/app-form/app-form.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-grid-list cols=\"5\" rowHeight=\"48px\">\n    <mat-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background]=\"(selectedTile!=null && selectedTile == tile)? '#ff6e40':'#febf58'\"\n      (click)=\"onSelectTile(tile)\" [ngClass]=\"{ 'hightlight': selectedTile!=null && selectedTile == tile}\">\n      <span class=\"mat-caption\">{{ tile.text }}</span>\n    </mat-grid-tile>\n  </mat-grid-list>\n  <mat-tab-group mat-stretch-tabs>\n\n    <mat-tab label=\"General Info\">\n      <div style=\"background-color: white;\">\n\n        <section class=\"mat-typography\">\n          <h1 class=\"text-center\">Biennium Grants</h1>\n          <p>Biennium Grants FY2017-FY2019 Call for FY2017 – FY2019 Biennium Grant Program Community Peer Panelists</p>\n        </section>\n\n        <section class=\"mat-typography\">\n          <h2>SFCA 2017 Biennium Grants</h2>\n          <p>In Fiscal Year 2017 (July 1, 2016 – June 30, 2017), $500,000 was disbursed to organizations through the Biennium\n            Grants Program, one of the core pillars of the State Foundation’s commitment to promote, perpetuate, preserve\n            and encourage culture and the arts. Grants are awarded in five categories: Arts Education, Community Arts, Heritage\n            & Preservation, Presentation, and Performing Arts. A list of the grantees for Fiscal Year 2017 is available in\n            the SFCA’s Annual Report: FY2016-2017 SFCA Annual Report.</p>\n        </section>\n\n        <section class=\"mat-typography\">\n          <p>The Hawai‘i State Foundation on Culture and the Arts provides public funds via its SFCA Biennium Grants Program\n            to support projects designed to preserve and further culture, the arts, history, and/or the humanities beneficial\n            to Hawai‘i. The legal provisions of the Biennium Grants Program are in Sections 9-11 through 9-18 of the Hawai‘i\n            Revised Statutes. The Grants Program budget is contingent on the State fiscal biennium and appropriations from\n            the Hawai‘i State Legislature.</p>\n          <p>Through this program, funding is awarded to organizations conducting programming in the arts, culture, history\n            and the humanities that benefit the people of Hawai‘i. Updates regarding submission deadlines, grant workshops,\n            etc. can be found on the Ko‘o Hana Noeau website at culturegrants-hi.org.</p>\n          <p>Biennium Grants Program Guidelines are available here: Grant Guidelines.</p>\n        </section>\n\n        <section class=\"mat-typography\">\n          <h2>Application Process</h2>\n          <p>All original grant proposals, revised proposals, and final reports are to be completed using the Ko‘o Hana No‘eau\n            Electronic Grants System. Grantees may access the system through their respective organization’s user name and\n            password. If you misplace your user name or password or both, please call (808) 586-0840. To enter the system,\n            click here: www.culturegrants-hi.org.</p>\n        </section>\n\n        <section class=\"mat-typography\">\n          <h2>The Grants Process</h2>\n          <p>The SFCA Biennium Grants are awarded for a two-year period. During the application period, all applications received\n            by the application deadline are considered. Applicants are subject to meeting Chapter 9 eligibility requirements\n            and policies established by the SFCA. Grants Panels review the applications and submit their recommendations.\n            The SFCA Board of Commissioners has final approval of the recommendations. Grants are subject to available funding;\n            for more information, click on SFCA Biennium Grants Allocations Policy.</p>\n          <p>All forms and reports should be submitted through Ko’o Hana No’eau. The following PDFs are only to be used in the\n            event that Ko’o Hana No’eau is offline.</p>\n        </section>\n\n        <section class=\"mat-typography\">\n          <h2>Contact</h2>\n          <p>For more information about the Biennium Grants Program, call Charles Medeiros at (808) 586-0309.</p>\n        </section>\n\n      </div>\n    </mat-tab>\n\n    <mat-tab label=\"SFCA Revised Proposal Form - FY 2019\">\n      <div style=\"background-color: white;\">\n        <mat-card>\n          <mat-card-title>Revised Proposal Form</mat-card-title>\n          <mat-card-content>\n            <mat-list>\n              <mat-list-item>\n                <mat-icon mat-list-icon>label_important</mat-icon>\n                Activities and budget should remain within the intent of the original proposal. Submit the signed original of the Revised\n                Proposal.\n              </mat-list-item>\n              <mat-list-item>\n                <mat-icon mat-list-icon>label_important</mat-icon>\n                The contents of each section of the Revised Proposal should be based on the corresponding sections in the original Request\n                for Proposals application.\n              </mat-list-item>\n              <mat-list-item>\n                <mat-icon mat-list-icon>label_important</mat-icon>\n                If you received partial funding from the SFCA, you may modify proportionately the proposed services (unless you intend to\n                make up the difference). Pare down the SFCA portion of the budget to meet the amount being funded by the\n                SFCA. Any panel restrictions must be incorporated into your revision.\n              </mat-list-item>\n              <mat-list-item>\n                <mat-icon mat-list-icon>label_important</mat-icon>\n                Approval for any changes to the original application must be requested in writing prior to\n                completion of the Revised Proposal and execution of the contract. (If time becomes critical, send request\n                for changes in with Revised Proposal)</mat-list-item>\n              <mat-list-item>\n                <mat-icon mat-list-icon>label_important</mat-icon>\n                Submit profiles of artists/professionals included in section E, \"Budget-Expenses.\"</mat-list-item>\n            </mat-list>\n          </mat-card-content>\n        </mat-card>\n        <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n\n          <mat-step [stepControl]=\"formGroupA\">\n            <form class=\"application-form\" [formGroup]=\"formGroupA\">\n              <ng-template matStepLabel>A. Project Title</ng-template>\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"SFCA Project Code\" formControlName=\"projectCode\">\n              </mat-form-field>\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Project Title\" formControlName=\"projectTitle\">\n              </mat-form-field>\n              <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                <button mat-stroked-button color=\"primary\" (click)=\"openHelp(helpGroupA)\">\n                  <mat-icon aria-label=\"Help\">help_outline</mat-icon>\n                </button>\n                <button mat-flat-button color=\"primary\" matStepperNext>Next</button>\n              </div>\n            </form>\n          </mat-step>\n\n          <mat-step [stepControl]=\"formGroupB\">\n            <form class=\"application-form\" [formGroup]=\"formGroupB\">\n              <ng-template matStepLabel>B. Name of Organization</ng-template>\n\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Name of Organization\" formControlName=\"nameOfOrganization\">\n              </mat-form-field>\n\n              <div formGroupName=\"address\">\n                <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n                  <mat-checkbox formControlName=\"bus\">Bus</mat-checkbox>\n                  <mat-checkbox formControlName=\"mailing\">Mailing</mat-checkbox>\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                  <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"City\" formControlName=\"city\">\n                  </mat-form-field>\n                  <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"State\" formControlName=\"state\">\n                  </mat-form-field>\n                  <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Zip Code\" formControlName=\"zipCode\">\n                  </mat-form-field>\n                </div>\n              </div>\n\n              <div formGroupName=\"projectDirector\">\n                <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                  <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Project Director\" formControlName=\"name\">\n                  </mat-form-field>\n                  <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Phone\" formControlName=\"phone\">\n                  </mat-form-field>\n                </div>\n              </div>\n\n              <div formGroupName=\"contactPerson\">\n                <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                  <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Contact Person\" formControlName=\"name\">\n                  </mat-form-field>\n                  <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Title\" formControlName=\"title\">\n                  </mat-form-field>\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                  <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Phone (Bus)\" formControlName=\"phoneBus\">\n                  </mat-form-field>\n                  <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Phone (Res)\" formControlName=\"phoneRes\">\n                  </mat-form-field>\n                </div>\n              </div>\n\n              <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                <button mat-stroked-button color=\"primary\" (click)=\"openHelp(helpGroupB)\">\n                  <mat-icon aria-label=\"Help\">help_outline</mat-icon>\n                </button>\n                <button mat-stroked-button color=\"primary\" matStepperPrevious>Back</button>\n                <button mat-flat-button color=\"primary\" matStepperNext>Next</button>\n              </div>\n\n            </form>\n          </mat-step>\n\n          <mat-step [stepControl]=\"formGroupC\">\n            <form class=\"application-form\" [formGroup]=\"formGroupC\">\n              <ng-template matStepLabel>C. Project Period</ng-template>\n              <div formGroupName=\"projectPeriod\">\n                <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                  <mat-form-field class=\"full-width\">\n                    <input matInput [matDatepicker]=\"pickerStartDate\" placeholder=\"Start Date\" formControlName=\"startDate\">\n                    <mat-datepicker-toggle matSuffix [for]=\"pickerStartDate\"></mat-datepicker-toggle>\n                    <mat-datepicker #pickerStartDate></mat-datepicker>\n                  </mat-form-field>\n                  <mat-form-field class=\"full-width\">\n                    <input matInput [matDatepicker]=\"pickerEndDate\" placeholder=\"End Date\" formControlName=\"endDate\">\n                    <mat-datepicker-toggle matSuffix [for]=\"pickerEndDate\"></mat-datepicker-toggle>\n                    <mat-datepicker #pickerEndDate></mat-datepicker>\n                  </mat-form-field>\n                </div>\n                <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                  <button mat-stroked-button color=\"primary\" (click)=\"openHelp(helpGroupC)\">\n                    <mat-icon aria-label=\"Help\">help_outline</mat-icon>\n                  </button>\n                  <button mat-stroked-button color=\"primary\" matStepperPrevious>Back</button>\n                  <button mat-flat-button color=\"primary\" matStepperNext>Next</button>\n                </div>\n              </div>\n            </form>\n          </mat-step>\n\n          <mat-step [stepControl]=\"formGroupD\">\n            <form class=\"application-form\" [formGroup]=\"formGroupD\">\n              <ng-template matStepLabel>D. Description of the service(s) to be performed</ng-template>\n              <p>1. List activities, dates, locations, artists or other personnel involved, etc., as specific as possible, based\n                on Section II.D. of the Contractor’s Fiscal Year 2017 Proposal.\n              </p>\n              <div formArrayName=\"services\">\n                <fieldset *ngFor=\"let service of formGroupD.get('services').controls; let i = index;\">\n                  <legend>Activity</legend>\n                  <div [formGroupName]=\"i\">\n                    <mat-form-field class=\"full-width\">\n                      <textarea matInput placeholder=\"Activity\" rows=\"6\" formControlName=\"activity\"></textarea>\n                      <mat-hint>Include a narrative explaining the nature of each activity</mat-hint>\n                    </mat-form-field>\n                    <mat-form-field class=\"full-width\">\n                      <input matInput placeholder=\"Personnel\" formControlName=\"personnel\">\n                    </mat-form-field>\n                    <mat-form-field class=\"full-width\">\n                      <input matInput placeholder=\"Location\" formControlName=\"location\">\n                    </mat-form-field>\n                    <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                      <mat-form-field class=\"full-width\">\n                        <input matInput [matDatepicker]=\"pickerActivityStartDate\" placeholder=\"Start Date\" formControlName=\"startDate\">\n                        <mat-datepicker-toggle matSuffix [for]=\"pickerActivityStartDate\"></mat-datepicker-toggle>\n                        <mat-datepicker #pickerActivityStartDate></mat-datepicker>\n                      </mat-form-field>\n                      <mat-form-field class=\"full-width\">\n                        <input matInput [matDatepicker]=\"pickerActivityEndDate\" placeholder=\"End Date\" formControlName=\"endDate\">\n                        <mat-datepicker-toggle matSuffix [for]=\"pickerActivityEndDate\"></mat-datepicker-toggle>\n                        <mat-datepicker #pickerActivityEndDate></mat-datepicker>\n                      </mat-form-field>\n                    </div>\n                  </div>\n                  <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                    <button mat-stroked-button color=\"accent\" (click)=\"formGroupD.get('services').removeAt(i)\">Remove Activity</button>\n                  </div>\n                </fieldset>\n                <br/>\n              </div>\n              <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                <button mat-flat-button color=\"accent\" (click)=\"formGroupD.get('services').controls.push(createService())\">Add Another Activity</button>\n              </div>\n              <div fxLayout=\"column\">\n                <div formGroupName=\"k12\">\n                  <p>2. Does this project conduct an artist residency in schools (K-12)?</p>\n                  <mat-radio-group formControlName=\"yes\">\n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n                      <mat-radio-button value=\"1\">Yes</mat-radio-button>\n                      <mat-radio-button value=\"0\">No</mat-radio-button>\n                    </div>\n                  </mat-radio-group>\n                  <p></p>\n                  <div *ngIf=\"formGroupD.get('k12').get('yes').value==true\">\n                    <mat-form-field class=\"full-width\">\n                      <input matInput placeholder=\"Are you working with the DOE, Artists-in-the-Schools program?\" formControlName=\"artistsInTheSchools\">\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n\n              <div fxLayout=\"column\">\n                <div formGroupName=\"danceConcerts\">\n                  <p>3. Does this project present dance concerts?</p>\n                  <mat-radio-group formControlName=\"yes\">\n                    <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n                      <mat-radio-button value=\"1\">Yes</mat-radio-button>\n                      <mat-radio-button value=\"0\">No</mat-radio-button>\n                    </div>\n                  </mat-radio-group>\n                  <p></p>\n                  <div *ngIf=\"formGroupD.get('danceConcerts').get('yes').value==true\">\n                    <mat-form-field class=\"full-width\">\n                      <input matInput placeholder=\"Please identify and indicate whether the dance artists are Hawaii-based or out-of-state\" formControlName=\"hawaiiBased\">\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n              <p></p>\n              <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                <button mat-stroked-button color=\"primary\" (click)=\"openHelp(helpGroupD)\">\n                  <mat-icon aria-label=\"Help\">help_outline</mat-icon>\n                </button>\n                <button mat-stroked-button color=\"primary\" matStepperPrevious>Back</button>\n                <button mat-flat-button color=\"primary\" matStepperNext>Next</button>\n              </div>\n            </form>\n          </mat-step>\n\n          <mat-step [stepControl]=\"formGroupE\">\n            <form class=\"application-form\" [formGroup]=\"formGroupE\">\n\n              <ng-template matStepLabel>E. Planned Budget - Expenses and In-Kind Contributions</ng-template>\n              <p>Must be based on Section II, H. of your Fiscal Year 2017 SFCA Proposal. See instructions for definitions.</p>\n              <fieldset>\n                <legend>1. Personnel Costs (Employees)</legend>\n                <table formArrayName=\"personnelCosts\" width=\"100%\" class=\"mat-caption\">\n                  <thead>\n                    <tr>\n                      <th width=\"12%\">Employees Type</th>\n                      <th width=\"12%\">Number of Persons</th>\n                      <th width=\"12%\">Rate of Pay</th>\n                      <th width=\"12%\">Number of Hours</th>\n                      <th width=\"12%\">Total Cash Expenses</th>\n                      <th width=\"12%\">SFCA Share</th>\n                      <th width=\"12%\">In-Kind Value</th>\n                      <th width=\"12%\"></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let cost of formGroupE.get('personnelCosts').controls; let i = index;\" [formGroupName]=\"i\">\n                      <td>\n                        <mat-form-field class=\"full-width\">\n                          <mat-select formControlName=\"type\">\n                            <mat-option value=\"Administrative\">a. Administrative</mat-option>\n                            <mat-option value=\"Artistic/Professional\">b. Artistic/Professional</mat-option>\n                            <mat-option value=\"Technical/Production\">c. Technical/Production</mat-option>\n                          </mat-select>\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"numberOfPersons\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        $\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"rateOfPay\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"numberOfHours\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        $\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"totalCashExpenses\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        $\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"sfcaShare\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        $\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"inKindValue\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        <button mat-stroked-button color=\"accent\" (click)=\"formGroupE.get('personnelCosts').removeAt(i)\">Remove</button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                  <button mat-flat-button color=\"accent\" (click)=\"formGroupE.get('personnelCosts').push(createPersonnelCost())\">Add</button>\n                </div>\n              </fieldset>\n\n              <fieldset>\n                <legend>2. Outside (Non-Employee) Fees and Services</legend>\n                <table formArrayName=\"nonEmployeeCosts\" width=\"100%\">\n                  <thead class=\"mat-caption\">\n                    <tr>\n                      <th width=\"12%\">Non-Employee Type</th>\n                      <th width=\"12%\">Number of Persons</th>\n                      <th width=\"12%\">Rate of Pay</th>\n                      <th width=\"12%\">Number of Hours</th>\n                      <th width=\"12%\">Total Cash Expenses</th>\n                      <th width=\"12%\">SFCA Share</th>\n                      <th width=\"12%\">In-Kind Value</th>\n                      <th width=\"12%\"></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let cost of formGroupE.get('nonEmployeeCosts').controls; let i = index;\" [formGroupName]=\"i\">\n                      <td>\n                        <mat-form-field class=\"full-width\">\n                          <mat-select formControlName=\"type\">\n                            <mat-option value=\"Artistic/Professional\">a. Artistic/Professional</mat-option>\n                            <mat-option value=\"Technical/Production\">b. Other</mat-option>\n                          </mat-select>\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"numberOfPersons\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        $\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"rateOfPay\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"numberOfHours\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        $\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"totalCashExpenses\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        $\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"sfcaShare\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        $\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"inKindValue\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        <button mat-stroked-button color=\"accent\" (click)=\"formGroupE.get('nonEmployeeCosts').removeAt(i)\">Remove</button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                  <button mat-flat-button color=\"accent\" (click)=\"formGroupE.get('nonEmployeeCosts').push(createNonEmployeeCost())\">Add</button>\n                </div>\n              </fieldset>\n\n              <fieldset>\n                <legend>3. Other Expenses</legend>\n                <div formGroupName=\"otherExpenses\">\n                  <h4>a. Space Rentals</h4>\n                  <table formArrayName=\"spaceRentals\" width=\"100%\" class=\"hightlight-bg\">\n                    <thead class=\"mat-caption\">\n                      <tr>\n                        <th width=\"48%\">Space Rental</th>\n                        <th width=\"12%\">Total Cash Expenses</th>\n                        <th width=\"12%\">SFCA Share</th>\n                        <th width=\"12%\">In-Kind Value</th>\n                        <th width=\"12%\"></th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let cost of formGroupE.get('otherExpenses').get('spaceRentals').controls; let i = index;\" [formGroupName]=\"i\">\n                        <td>\n                          <mat-form-field class=\"full-width\" fxFlex=\"90%\">\n                            <input matInput formControlName=\"rental\">\n                          </mat-form-field>\n                        </td>\n                        <td>\n                          $\n                          <mat-form-field class=\"full-width\">\n                            <input matInput formControlName=\"totalCashExpenses\">\n                          </mat-form-field>\n                        </td>\n                        <td>\n                          $\n                          <mat-form-field class=\"full-width\">\n                            <input matInput formControlName=\"sfcaShare\">\n                          </mat-form-field>\n                        </td>\n                        <td>\n                          $\n                          <mat-form-field class=\"full-width\">\n                            <input matInput formControlName=\"inKindValue\">\n                          </mat-form-field>\n                        </td>\n                        <td>\n                          <button mat-stroked-button color=\"accent\" (click)=\"formGroupE.get('otherExpenses').get('spaceRentals').removeAt(i)\">Remove</button>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                  <p></p>\n                  <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                    <button mat-flat-button color=\"accent\" (click)=\"formGroupE.get('otherExpenses').get('spaceRentals').push(createSpaceRental())\">Add</button>\n                  </div>\n                  <h4>b. Travel</h4>\n                  <div formGroupName=\"travel\">\n                    <h5>Transportation</h5>\n                    <table formArrayName=\"transportation\" width=\"100%\" class=\"hightlight-bg\">\n                      <thead class=\"mat-caption\">\n                        <tr>\n                          <th width=\"12%\">Number of Personsl</th>\n                          <th width=\"18%\">From</th>\n                          <th width=\"18%\">To</th>\n                          <th width=\"12%\">Total Cash Expenses</th>\n                          <th width=\"12%\">SFCA Share</th>\n                          <th width=\"12%\">In-Kind Value</th>\n                          <th width=\"12%\"></th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let cost of formGroupE.get('otherExpenses').get('travel').get('transportation').controls; let i = index;\" [formGroupName]=\"i\">\n                          <td>\n                            <mat-form-field class=\"full-width\">\n                              <input matInput formControlName=\"numberOfPersons\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            <mat-form-field class=\"full-width\" fxLayoutAlign=\"start stretch\">\n                              <input matInput [matDatepicker]=\"pickerFrom\" formControlName=\"from\">\n                              <mat-datepicker-toggle matSuffix [for]=\"pickerFrom\"></mat-datepicker-toggle>\n                              <mat-datepicker #pickerFrom></mat-datepicker>\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            <mat-form-field class=\"full-width\" fxLayoutAlign=\"start stretch\">\n                              <input matInput [matDatepicker]=\"pickerTo\" formControlName=\"to\">\n                              <mat-datepicker-toggle matSuffix [for]=\"pickerTo\"></mat-datepicker-toggle>\n                              <mat-datepicker #pickerTo></mat-datepicker>\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            $\n                            <mat-form-field class=\"full-width\">\n                              <input matInput formControlName=\"totalCashExpenses\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            $\n                            <mat-form-field class=\"full-width\">\n                              <input matInput formControlName=\"sfcaShare\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            $\n                            <mat-form-field class=\"full-width\">\n                              <input matInput formControlName=\"inKindValue\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            <button mat-stroked-button color=\"accent\" (click)=\"formGroupE.get('otherExpenses').get('travel').get('transportation').removeAt(i)\">Remove</button>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                    <p></p>\n                    <div fxLayout=\"row\">\n                      <button mat-flat-button color=\"accent\" (click)=\"formGroupE.get('otherExpenses').get('travel').get('transportation').push(createTransportation())\">Add</button>\n                    </div>\n\n                    <h5>Per Diem</h5>\n                    <table formArrayName=\"perDiem\" width=\"100%\" class=\"hightlight-bg\">\n                      <thead class=\"mat-caption\">\n                        <tr>\n                          <th width=\"24%\">Number of Personsl</th>\n                          <th width=\"12%\">Rate</th>\n                          <th width=\"12%\">Days</th>\n                          <th width=\"12%\">Total Cash Expenses</th>\n                          <th width=\"12%\">SFCA Share</th>\n                          <th width=\"12%\">In-Kind Value</th>\n                          <th width=\"12%\"></th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let cost of formGroupE.get('otherExpenses').get('travel').get('perDiem').controls; let i = index;\" [formGroupName]=\"i\">\n                          <td>\n                            <mat-form-field class=\"full-width\" fxFlex=\"90%\">\n                              <input matInput formControlName=\"numberOfPersons\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            $\n                            <mat-form-field class=\"full-width\">\n                              <input matInput formControlName=\"rate\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            <mat-form-field class=\"full-width\">\n                              <input matInput formControlName=\"days\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            $\n                            <mat-form-field class=\"full-width\">\n                              <input matInput formControlName=\"totalCashExpenses\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            $\n                            <mat-form-field class=\"full-width\">\n                              <input matInput formControlName=\"sfcaShare\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            $\n                            <mat-form-field class=\"full-width\">\n                              <input matInput formControlName=\"inKindValue\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            <button mat-stroked-button color=\"accent\" (click)=\"formGroupE.get('otherExpenses').get('travel').get('perDiem').removeAt(i)\">Remove</button>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                    <p></p>\n                    <div fxLayout=\"row\">\n                      <button mat-flat-button color=\"accent\" (click)=\"formGroupE.get('otherExpenses').get('travel').get('perDiem').push(createPerDiemOrOther())\">Add</button>\n                    </div>\n\n                    <h5>Other</h5>\n                    <table formArrayName=\"other\" width=\"100%\" class=\"hightlight-bg\">\n                      <thead class=\"mat-caption\">\n                        <tr>\n                          <th width=\"24%\">Number of Personsl</th>\n                          <th width=\"12%\">Rate</th>\n                          <th width=\"12%\">Days</th>\n                          <th width=\"12%\">Total Cash Expenses</th>\n                          <th width=\"12%\">SFCA Share</th>\n                          <th width=\"12%\">In-Kind Value</th>\n                          <th width=\"12%\"></th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let cost of formGroupE.get('otherExpenses').get('travel').get('other').controls; let i = index;\" [formGroupName]=\"i\">\n                          <td>\n                            <mat-form-field class=\"full-width\" fxFlex=\"90%\">\n                              <input matInput formControlName=\"numberOfPersons\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            $\n                            <mat-form-field class=\"full-width\">\n                              <input matInput formControlName=\"rate\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            <mat-form-field class=\"full-width\">\n                              <input matInput formControlName=\"days\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            $\n                            <mat-form-field class=\"full-width\">\n                              <input matInput formControlName=\"totalCashExpenses\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            $\n                            <mat-form-field class=\"full-width\">\n                              <input matInput formControlName=\"sfcaShare\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            $\n                            <mat-form-field class=\"full-width\">\n                              <input matInput formControlName=\"inKindValue\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            <button mat-stroked-button color=\"accent\" (click)=\"formGroupE.get('otherExpenses').get('travel').get('other').removeAt(i)\">Remove</button>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                    <p></p>\n                    <div fxLayout=\"row\">\n                      <button mat-flat-button color=\"accent\" (click)=\"formGroupE.get('otherExpenses').get('travel').get('other').push(createPerDiemOrOther())\">Add</button>\n                    </div>\n\n                  </div>\n\n                  <h4>c. Marketing (Promotion)</h4>\n                  <table formArrayName=\"marketing\" width=\"100%\" class=\"hightlight-bg\">\n                    <thead class=\"mat-caption\">\n                      <tr>\n                        <th width=\"48%\">Marketing (Promotion)</th>\n                        <th width=\"12%\">Total Cash Expenses</th>\n                        <th width=\"12%\">SFCA Share</th>\n                        <th width=\"12%\">In-Kind Value</th>\n                        <th width=\"12%\"></th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let cost of formGroupE.get('otherExpenses').get('marketing').controls; let i = index;\" [formGroupName]=\"i\">\n                        <td>\n                          <mat-form-field class=\"full-width\" fxFlex=\"90%\">\n                            <input matInput formControlName=\"marketing\">\n                          </mat-form-field>\n                        </td>\n                        <td>\n                          $\n                          <mat-form-field class=\"full-width\">\n                            <input matInput formControlName=\"totalCashExpenses\">\n                          </mat-form-field>\n                        </td>\n                        <td>\n                          $\n                          <mat-form-field class=\"full-width\">\n                            <input matInput formControlName=\"sfcaShare\">\n                          </mat-form-field>\n                        </td>\n                        <td>\n                          $\n                          <mat-form-field class=\"full-width\">\n                            <input matInput formControlName=\"inKindValue\">\n                          </mat-form-field>\n                        </td>\n                        <td>\n                          <button mat-stroked-button color=\"accent\" (click)=\"formGroupE.get('otherExpenses').get('marketing').removeAt(i)\">Remove</button>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                  <p></p>\n                  <div fxLayout=\"row\">\n                    <button mat-flat-button color=\"accent\" (click)=\"formGroupE.get('otherExpenses').get('marketing').push(createMarketing())\">Add</button>\n                  </div>\n\n                  <h4>d. Remaining Operating Expenses</h4>\n\n                  <div formGroupName=\"remainingOperatingExpenses\">\n                    <h5>Supplies and Materials</h5>\n                    <table formArrayName=\"suppliesAndMaterials\" width=\"100%\" class=\"hightlight-bg\">\n                      <thead class=\"mat-caption\">\n                        <tr>\n                          <th width=\"48%\">Supplies and Materials</th>\n                          <th width=\"12%\">Total Cash Expenses</th>\n                          <th width=\"12%\">SFCA Share</th>\n                          <th width=\"12%\">In-Kind Value</th>\n                          <th width=\"12%\"></th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let cost of formGroupE.get('otherExpenses').get('remainingOperatingExpenses').get('suppliesAndMaterials').controls; let i = index;\"\n                          [formGroupName]=\"i\">\n                          <td>\n                            <mat-form-field class=\"full-width\" fxFlex=\"90%\">\n                              <input matInput formControlName=\"suppliesAndMaterial\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            $\n                            <mat-form-field class=\"full-width\">\n                              <input matInput formControlName=\"totalCashExpenses\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            $\n                            <mat-form-field class=\"full-width\">\n                              <input matInput formControlName=\"sfcaShare\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            $\n                            <mat-form-field class=\"full-width\">\n                              <input matInput formControlName=\"inKindValue\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            <button mat-stroked-button color=\"accent\" (click)=\"formGroupE.get('otherExpenses').get('remainingOperatingExpenses').get('suppliesAndMaterials').removeAt(i)\">Remove</button>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                    <p></p>\n                    <div fxLayout=\"row\">\n                      <button mat-flat-button color=\"accent\" (click)=\"formGroupE.get('otherExpenses').get('remainingOperatingExpenses').get('suppliesAndMaterials').push(createSuppliesAndMaterial())\">Add</button>\n                    </div>\n\n                    <h5>Other Expenses</h5>\n\n                    <table formArrayName=\"otherExpenses\" width=\"100%\" class=\"hightlight-bg\">\n                      <thead class=\"mat-caption\">\n                        <tr>\n                          <th width=\"48%\">Other Expenses</th>\n                          <th width=\"12%\">Total Cash Expenses</th>\n                          <th width=\"12%\">SFCA Share</th>\n                          <th width=\"12%\">In-Kind Value</th>\n                          <th width=\"12%\"></th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let cost of formGroupE.get('otherExpenses').get('remainingOperatingExpenses').get('otherExpenses').controls; let i = index;\"\n                          [formGroupName]=\"i\">\n                          <td>\n                            <mat-form-field class=\"full-width\" fxFlex=\"90%\">\n                              <input matInput formControlName=\"otherExpense\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            $\n                            <mat-form-field class=\"full-width\">\n                              <input matInput formControlName=\"totalCashExpenses\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            $\n                            <mat-form-field class=\"full-width\">\n                              <input matInput formControlName=\"sfcaShare\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            $\n                            <mat-form-field class=\"full-width\">\n                              <input matInput formControlName=\"inKindValue\">\n                            </mat-form-field>\n                          </td>\n                          <td>\n                            <button mat-stroked-button color=\"accent\" (click)=\"formGroupE.get('otherExpenses').get('remainingOperatingExpenses').get('otherExpenses').removeAt(i)\">Remove</button>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                    <p></p>\n                    <div fxLayout=\"row\">\n                      <button mat-flat-button color=\"accent\" (click)=\"formGroupE.get('otherExpenses').get('remainingOperatingExpenses').get('otherExpenses').push(createOtherExpense())\">Add</button>\n                    </div>\n\n                  </div>\n                </div>\n              </fieldset>\n              <p></p>\n              <div formGroupName=\"totals\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n                <h5>Totals:</h5>\n                $\n                <mat-form-field class=\"full-width\">\n                  <input matInput placeholder=\"Total Cash Expenses (incl. SFCA share)\" formControlName=\"totalCashExpenses\">\n                </mat-form-field>\n                $\n                <mat-form-field class=\"full-width\">\n                  <input matInput placeholder=\"Total SFCA Share\" formControlName=\"sfcaShare\">\n                </mat-form-field>\n                $\n                <mat-form-field class=\"full-width\">\n                  <input matInput placeholder=\"Total In-Kind $ Value (but not in cash)\" formControlName=\"inKindValue\">\n                </mat-form-field>\n              </div>\n\n              <p></p>\n              <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                <button mat-stroked-button color=\"primary\" (click)=\"openHelp(helpGroupE)\">\n                  <mat-icon aria-label=\"Help\">help_outline</mat-icon>\n                </button>\n                <button mat-stroked-button color=\"primary\" matStepperPrevious>Back</button>\n                <button mat-flat-button color=\"primary\" matStepperNext>Next</button>\n              </div>\n            </form>\n          </mat-step>\n\n          <mat-step [stepControl]=\"formGroupF\">\n            <form class=\"application-form\" [formGroup]=\"formGroupF\">\n              <ng-template matStepLabel>F. Planned Budget - Revenue</ng-template>\n              <p>Must be based on Section II, H. of your Fiscal Year 2017 SFCA Proposal. See instructions for definitions.</p>\n\n\n              <fieldset formGroupName=\"feesCollected\">\n                <legend>1. Fees Collected</legend>\n\n                <h5>a. Admissions and Fees</h5>\n                <table formArrayName=\"admissions\" width=\"100%\" class=\"hightlight-bg\">\n\n                  <thead class=\"mat-caption\">\n                    <tr>\n                      <th width=\"12%\">No of persons</th>\n                      <th width=\"12%\">Fee</th>\n                      <th width=\"24%\">Total Fee</th>\n                      <th width=\"24%\">Per</th>\n                      <th width=\"12%\">Revenue</th>\n                      <th width=\"12%\"></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let cash of formGroupF.get('feesCollected').get('admissions').controls; let i=index\" [formGroupName]=\"i\">\n                      <td>\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"numberOfPersons\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"fee\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        <mat-form-field class=\"full-width\" fxLayoutAlign=\"start stretch\">\n                          <input matInput formControlName=\"totalFee\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        <mat-form-field class=\"full-width\" fxLayoutAlign=\"start stretch\">\n                          <input matInput formControlName=\"per\">\n                        </mat-form-field>\n                      </td>\n                      <td> $\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"revenue\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        <button mat-stroked-button color=\"accent\" (click)=\"formGroupF.get('feesCollected').get('admissions').removeAt(i)\">Remove</button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <p></p>\n\n                <div fxLayout=\"row\">\n                  <button mat-flat-button color=\"accent\" (click)=\"formGroupF.get('feesCollected').get('admissions').push(createAdmissions())\">Add</button>\n                </div>\n                <p></p>\n                <h5>b. Contracted Services</h5>\n                <table formArrayName=\"contractedServices\" width=\"100%\" class=\"hightlight-bg\">\n                  <thead class=\"mat-caption\">\n                    <tr>\n                      <th width=\"72%\">Service</th>\n                      <th width=\"12%\">Revenue</th>\n                      <th width=\"12%\"></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let cash of formGroupF.get('feesCollected').get('contractedServices').controls; let i=index\" [formGroupName]=\"i\">\n                      <td>\n                        <mat-form-field class=\"full-width\" fxFlex>\n                          <input matInput formControlName=\"name\">\n                        </mat-form-field>\n                      </td>\n                      <td> $\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"revenue\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        <button mat-stroked-button color=\"accent\" (click)=\"formGroupF.get('feesCollected').get('contractedServices').removeAt(i)\">Remove</button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <p></p>\n                <div fxLayout=\"row\">\n                  <button mat-flat-button color=\"accent\" (click)=\"formGroupF.get('feesCollected').get('contractedServices').push(createRevenue())\">Add</button>\n                </div>\n              </fieldset>\n              <p></p>\n              <fieldset formGroupName=\"privateSupport\">\n                <legend>2. Private Corporate or Foundation Support</legend>\n\n                <table formArrayName=\"corporateOrFoundation\" width=\"100%\" class=\"hightlight-bg\">\n                  <thead class=\"mat-caption\">\n                    <tr>\n                      <th width=\"72%\">Private Corporate or Foundation Support</th>\n                      <th width=\"12%\">Revenue</th>\n                      <th width=\"12%\"></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let cash of formGroupF.get('privateSupport').get('corporateOrFoundation').controls; let i=index\" [formGroupName]=\"i\">\n                      <td>\n                        <mat-form-field class=\"full-width\" fxFlex>\n                          <input matInput formControlName=\"name\">\n                        </mat-form-field>\n                      </td>\n                      <td> $\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"revenue\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        <button mat-stroked-button color=\"accent\" (click)=\"formGroupF.get('privateSupport').get('corporateOrFoundation').removeAt(i)\">Remove</button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <p></p>\n                <div fxLayout=\"row\">\n                  <button mat-flat-button color=\"accent\" (click)=\"formGroupF.get('privateSupport').get('corporateOrFoundation').push(createRevenue())\">Add</button>\n                </div>\n                <p></p>\n                <table formArrayName=\"other\" width=\"100%\" class=\"hightlight-bg\">\n                  <thead class=\"mat-caption\">\n                    <tr>\n                      <th width=\"72%\">Other Private Contributions</th>\n                      <th width=\"12%\">Revenue</th>\n                      <th width=\"12%\"></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let cash of formGroupF.get('privateSupport').get('other').controls; let i=index\" [formGroupName]=\"i\">\n                      <td>\n                        <mat-form-field class=\"full-width\" fxFlex>\n                          <input matInput formControlName=\"name\">\n                        </mat-form-field>\n                      </td>\n                      <td> $\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"revenue\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        <button mat-stroked-button color=\"accent\" (click)=\"formGroupF.get('privateSupport').get('other').removeAt(i)\">Remove</button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <p></p>\n                <div fxLayout=\"row\">\n                  <button mat-flat-button color=\"accent\" (click)=\"formGroupF.get('privateSupport').get('other').push(createRevenue())\">Add</button>\n                </div>\n              </fieldset>\n\n\n              <fieldset>\n                <legend>3. Federal Grants or Awards</legend>\n                <table formArrayName=\"federalGrantsOrAwards\" width=\"100%\">\n                  <thead class=\"mat-caption\">\n                    <tr>\n                      <th width=\"72%\">Federal Grants or Awards</th>\n                      <th width=\"12%\">Revenue</th>\n                      <th width=\"12%\"></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let cash of formGroupF.get('federalGrantsOrAwards').controls; let i=index\" [formGroupName]=\"i\">\n                      <td>\n                        <mat-form-field class=\"full-width\" fxFlex>\n                          <input matInput formControlName=\"name\">\n                        </mat-form-field>\n                      </td>\n                      <td> $\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"revenue\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        <button mat-stroked-button color=\"accent\" (click)=\"formGroupF.get('federalGrantsOrAwards').removeAt(i)\">Remove</button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <p></p>\n                <div fxLayout=\"row\">\n                  <button mat-flat-button color=\"accent\" (click)=\"formGroupF.get('federalGrantsOrAwards').push(createRevenue())\">Add</button>\n                </div>\n              </fieldset>\n\n\n              <fieldset>\n                <legend>4. State/Regional/County Support</legend>\n\n                <table formArrayName=\"stateRegionalCountySupport\" width=\"100%\">\n                  <thead class=\"mat-caption\">\n                    <tr>\n                      <th width=\"72%\">State/Regional/County Support (list individually)</th>\n                      <th width=\"12%\">Revenue</th>\n                      <th width=\"12%\"></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let cash of formGroupF.get('stateRegionalCountySupport').controls; let i=index\" [formGroupName]=\"i\">\n                      <td>\n                        <mat-form-field class=\"full-width\" fxFlex>\n                          <input matInput formControlName=\"name\">\n                        </mat-form-field>\n                      </td>\n                      <td> $\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"revenue\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        <button mat-stroked-button color=\"accent\" (click)=\"formGroupF.get('stateRegionalCountySupport').removeAt(i)\">Remove</button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <p></p>\n                <div fxLayout=\"row\">\n                  <button mat-flat-button color=\"accent\" (click)=\"formGroupF.get('stateRegionalCountySupport').push(createRevenue())\">Add</button>\n                </div>\n              </fieldset>\n\n\n              <fieldset>\n                <legend>5. Other Revenue</legend>\n                <table formArrayName=\"otherRevenue\" width=\"100%\">\n                  <thead class=\"mat-caption\">\n                    <tr>\n                      <th width=\"72%\">Other Revenue</th>\n                      <th width=\"12%\">Revenue</th>\n                      <th width=\"12%\"></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let cash of formGroupF.get('otherRevenue').controls; let i=index\" [formGroupName]=\"i\">\n                      <td>\n                        <mat-form-field class=\"full-width\" fxFlex>\n                          <input matInput formControlName=\"name\">\n                        </mat-form-field>\n                      </td>\n                      <td> $\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"revenue\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        <button mat-stroked-button color=\"accent\" (click)=\"formGroupF.get('otherRevenue').removeAt(i)\">Remove</button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <p></p>\n                <div fxLayout=\"row\">\n                  <button mat-flat-button color=\"accent\" (click)=\"formGroupF.get('otherRevenue').push(createRevenue())\">Add</button>\n                </div>\n              </fieldset>\n\n              <fieldset>\n                <legend>6.Applicant Cash (including trust funds)</legend>\n                <table formArrayName=\"applicantCash\" width=\"100%\">\n                  <thead class=\"mat-caption\">\n                    <tr>\n                      <th width=\"72%\">Applicant Cash</th>\n                      <th width=\"12%\">Revenue</th>\n                      <th width=\"12%\"></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let cash of formGroupF.get('applicantCash').controls; let i=index\" [formGroupName]=\"i\">\n                      <td>\n                        <mat-form-field class=\"full-width\" fxFlex>\n                          <input matInput formControlName=\"name\">\n                        </mat-form-field>\n                      </td>\n                      <td> $\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"revenue\">\n                        </mat-form-field>\n                      </td>\n                      <td>\n                        <button mat-stroked-button color=\"accent\" (click)=\"formGroupF.get('applicantCash').removeAt(i)\">Remove</button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <p></p>\n                <div fxLayout=\"row\">\n                  <button mat-flat-button color=\"accent\" (click)=\"formGroupF.get('applicantCash').push(createRevenue())\">Add</button>\n                </div>\n              </fieldset>\n              <p></p>\n              <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                <mat-form-field class=\"full-width\">\n                  <input matInput placeholder=\"Subtotal\" formControlName=\"subtotal\">\n                </mat-form-field>\n                <mat-form-field class=\"full-width\">\n                  <input matInput placeholder=\"SFCA Funds\" formControlName=\"sfcaFunds\">\n                </mat-form-field>\n                <mat-form-field class=\"full-width\">\n                  <input matInput placeholder=\"Total Cash Revenue\" formControlName=\"totalCashRevenue\">\n                </mat-form-field>\n              </div>\n              <p></p>\n              <fieldset formGroupName=\"certification\">\n                <legend>Certification</legend>\n                <p>The information contained in this proposal is correct to the best of my knowledge and has been duly authorized\n                  by the governing body of the applicant based on terms, conditions, and specifications set forth in the\n                  original proposal submitted in 2017.\n                </p>\n                <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                  <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Signature\" formControlName=\"signature\">\n                  </mat-form-field>\n                  <mat-form-field class=\"full-width\">\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" formControlName=\"date\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker></mat-datepicker>\n                  </mat-form-field>\n                </div>\n                <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                  <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Name\" formControlName=\"name\">\n                  </mat-form-field>\n                  <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Title\" formControlName=\"title\">\n                  </mat-form-field>\n                </div>\n                <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n                  <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Telephone (bus.)\" formControlName=\"telephoneBus\">\n                  </mat-form-field>\n                  <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Telephone (res.)\" formControlName=\"telephoneRes\">\n                  </mat-form-field>\n                </div>\n              </fieldset>\n\n            </form>\n\n            <p></p>\n            <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n              <button mat-stroked-button color=\"primary\" (click)=\"openHelp(helpGroupF)\">\n                <mat-icon aria-label=\"Help\">help_outline</mat-icon>\n              </button>\n              <button mat-stroked-button color=\"primary\" matStepperPrevious>Back</button>\n              <button mat-flat-button color=\"primary\" matStepperNext>Next</button>\n            </div>\n          </mat-step>\n\n          <mat-step>\n            <ng-template matStepLabel>Done</ng-template>\n            You are now done.\n            <p></p>\n            <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n              <button mat-stroked-button color=\"primary\" matStepperPrevious>Back</button>\n            </div>\n          </mat-step>\n        </mat-vertical-stepper>\n      </div>\n    </mat-tab>\n\n    <mat-tab label=\"Supporting Documents\">\n      <div class=\"empty\"></div>\n    </mat-tab>\n\n    <mat-tab label=\"Final Project Report - FY 2019\">\n      <div class=\"empty\"></div>\n    </mat-tab>\n\n    <mat-tab label=\"Payments\">\n      <div class=\"empty\"></div>\n    </mat-tab>\n\n  </mat-tab-group>\n</div>\n<footer></footer>"

/***/ }),

/***/ "./src/app/app-form/app-form.component.scss":
/*!**************************************************!*\
  !*** ./src/app/app-form/app-form.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  margin-top: 2px;\n  background-color: rgba(250, 250, 250, 0.9); }\n\nsection {\n  padding: 32px 16px; }\n\nsection p {\n    text-align: justify; }\n\n.application-form {\n  width: 100%; }\n\n.full-width {\n  width: 100%; }\n\n.hightlight {\n  color: white; }\n\n.hightlight-bg {\n  background-color: whitesmoke; }\n\nmat-grid-tile:hover {\n  color: white;\n  cursor: pointer; }\n\ndiv.empty {\n  min-height: 500px; }\n\nfieldset {\n  margin-top: 24px; }\n\ntable .full-width {\n  width: 80px !important; }\n\nth {\n  text-align: left; }\n"

/***/ }),

/***/ "./src/app/app-form/app-form.component.ts":
/*!************************************************!*\
  !*** ./src/app/app-form/app-form.component.ts ***!
  \************************************************/
/*! exports provided: AppFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFormComponent", function() { return AppFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-dialog/form-dialog.component */ "./src/app/app-form/form-dialog/form-dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppFormComponent = /** @class */ (function () {
    function AppFormComponent(fb, dialog, http) {
        this.fb = fb;
        this.dialog = dialog;
        this.http = http;
        this.tiles = [
            { text: 'Art Bento', cols: 1, rows: 1, color: '#FB8C00' },
            { text: 'Artists in the Schools', cols: 1, rows: 1, color: '#FF9800' },
            { text: 'Biennium Grants', cols: 1, rows: 1, color: '#FFA726' },
            { text: 'Folk & Traditional Arts', cols: 1, rows: 1, color: '#FFB74D' },
            { text: 'Poetry out Loud', cols: 1, rows: 1, color: '#FFCC80' }
        ];
        this.selectedTile = this.tiles[2];
        this.isLinear = false;
    }
    AppFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getJSON('./assets/json/A.json').subscribe(function (result) {
            _this.helpGroupA = result;
        });
        this.getJSON('./assets/json/B.json').subscribe(function (result) {
            _this.helpGroupB = result;
        });
        this.getJSON('./assets/json/C.json').subscribe(function (result) {
            _this.helpGroupC = result;
        });
        this.getJSON('./assets/json/D.json').subscribe(function (result) {
            _this.helpGroupD = result;
        });
        this.getJSON('./assets/json/E.json').subscribe(function (result) {
            _this.helpGroupE = result;
        });
        this.getJSON('./assets/json/F.json').subscribe(function (result) {
            _this.helpGroupF = result;
        });
        this.formGroupA = this.fb.group({
            projectCode: [''],
            projectTitle: [''],
        });
        this.formGroupB = this.fb.group({
            nameOfOrganization: [''],
            address: this.fb.group({
                bus: [''],
                mailing: [''],
                city: [''],
                state: [''],
                zipCode: [''],
            }),
            projectDirector: this.fb.group({
                name: [''],
                phone: ['']
            }),
            contactPerson: this.fb.group({
                name: [''],
                title: [''],
                phoneBus: [''],
                phoneRes: [''],
            })
        });
        this.formGroupC = this.fb.group({
            projectPeriod: this.fb.group({
                startDate: [''],
                endDate: ['']
            })
        });
        this.formGroupD = this.fb.group({
            services: this.fb.array([this.createService()]),
            k12: this.fb.group({
                yes: [''],
                artistsInTheSchools: ['']
            }),
            danceConcerts: this.fb.group({
                yes: [''],
                hawaiiBased: [''],
                outOfState: ['']
            }),
        });
        this.formGroupE = this.fb.group({
            personnelCosts: this.fb.array([this.createPersonnelCost()]),
            nonEmployeeCosts: this.fb.array([this.createNonEmployeeCost()]),
            otherExpenses: this.fb.group({
                spaceRentals: this.fb.array([this.createSpaceRental()]),
                travel: this.fb.group({
                    transportation: this.fb.array([this.createTransportation()]),
                    perDiem: this.fb.array([this.createPerDiemOrOther()]),
                    other: this.fb.array([this.createPerDiemOrOther()]),
                }),
                marketing: this.fb.array([this.createMarketing()]),
                remainingOperatingExpenses: this.fb.group({
                    suppliesAndMaterials: this.fb.array([this.createSuppliesAndMaterial()]),
                    otherExpenses: this.fb.array([this.createOtherExpense()])
                })
            }),
            totals: this.createTotals()
        });
        this.formGroupF = this.fb.group({
            feesCollected: this.fb.group({
                admissions: this.fb.array([this.createAdmissions()]),
                contractedServices: this.fb.array([this.createRevenue()])
            }),
            privateSupport: this.fb.group({
                corporateOrFoundation: this.fb.array([this.createRevenue()]),
                other: this.fb.array([this.createRevenue()])
            }),
            federalGrantsOrAwards: this.fb.array([this.createRevenue()]),
            stateRegionalCountySupport: this.fb.array([this.createRevenue()]),
            otherRevenue: this.fb.array([this.createRevenue()]),
            applicantCash: this.fb.array([this.createRevenue()]),
            subtotal: [''],
            sfcaFunds: [''],
            totalCashRevenue: [''],
            certification: this.fb.group({
                signature: [''],
                date: [''],
                name: [''],
                title: [''],
                telephoneBus: [''],
                telephoneRes: ['']
            })
        });
    };
    //=========== formGroupD =============//
    AppFormComponent.prototype.createService = function () {
        return this.fb.group({
            activity: [''],
            personnel: [''],
            startDate: [''],
            endDate: [''],
            location: ['']
        });
    };
    //=========== formGroupE =============//
    AppFormComponent.prototype.createPersonnelCost = function () {
        return this.fb.group({
            type: [''],
            numberOfPersons: [''],
            rateOfPay: [''],
            numberOfHours: [''],
            totalCashExpenses: [''],
            sfcaShare: [''],
            inKindValue: ['']
        });
    };
    AppFormComponent.prototype.createNonEmployeeCost = function () {
        return this.fb.group({
            type: [''],
            numberOfPersons: [''],
            rateOfPay: [''],
            numberOfHours: [''],
            totalCashExpenses: [''],
            sfcaShare: [''],
            inKindValue: ['']
        });
    };
    AppFormComponent.prototype.createSpaceRental = function () {
        return this.fb.group({
            rental: [''],
            totalCashExpenses: [''],
            sfcaShare: [''],
            inKindValue: ['']
        });
    };
    AppFormComponent.prototype.createTransportation = function () {
        return this.fb.group({
            numberOfPersons: [''],
            from: [''],
            to: [''],
            totalCashExpenses: [''],
            sfcaShare: [''],
            inKindValue: ['']
        });
    };
    AppFormComponent.prototype.createPerDiemOrOther = function () {
        return this.fb.group({
            numberOfPersons: [''],
            rate: [''],
            days: [''],
            totalCashExpenses: [''],
            sfcaShare: [''],
            inKindValue: ['']
        });
    };
    AppFormComponent.prototype.createMarketing = function () {
        return this.fb.group({
            marketing: [''],
            totalCashExpenses: [''],
            sfcaShare: [''],
            inKindValue: ['']
        });
    };
    AppFormComponent.prototype.createSuppliesAndMaterial = function () {
        return this.fb.group({
            suppliesAndMaterial: [''],
            totalCashExpenses: [''],
            sfcaShare: [''],
            inKindValue: ['']
        });
    };
    AppFormComponent.prototype.createOtherExpense = function () {
        return this.fb.group({
            otherExpense: [''],
            totalCashExpenses: [''],
            sfcaShare: [''],
            inKindValue: ['']
        });
    };
    AppFormComponent.prototype.createTotals = function () {
        return this.fb.group({
            totalCashExpenses: [''],
            sfcaShare: [''],
            inKindValue: ['']
        });
    };
    //=========== formGroupF =============//
    AppFormComponent.prototype.createAdmissions = function () {
        return this.fb.group({
            numberOfPersons: [''],
            fee: [''],
            totalFee: [''],
            per: [''],
            revenue: ['']
        });
    };
    AppFormComponent.prototype.createRevenue = function () {
        return this.fb.group({
            name: [''],
            revenue: ['']
        });
    };
    AppFormComponent.prototype.onSelectTile = function (tile) {
        this.selectedTile = tile;
        console.log(this.selectedTile);
    };
    AppFormComponent.prototype.openHelp = function (helpGroup) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.data = helpGroup;
        var dialogRef = this.dialog.open(_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_3__["FormDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    AppFormComponent.prototype.getJSON = function (filePath) {
        return this.http.get(filePath);
    };
    AppFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-form',
            template: __webpack_require__(/*! ./app-form.component.html */ "./src/app/app-form/app-form.component.html"),
            styles: [__webpack_require__(/*! ./app-form.component.scss */ "./src/app/app-form/app-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], AppFormComponent);
    return AppFormComponent;
}());



/***/ }),

/***/ "./src/app/app-form/form-dialog/form-dialog.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/app-form/form-dialog/form-dialog.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{ data.title }}</h2>\n<mat-dialog-content>\n  <div *ngFor=\"let section of data.sections\">\n    <h4 *ngIf=\"section.subTitle\">{{ section.subTitle }}</h4>\n    <p>{{ section.content }}</p>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Close</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/app-form/form-dialog/form-dialog.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/app-form/form-dialog/form-dialog.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-form/form-dialog/form-dialog.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/app-form/form-dialog/form-dialog.component.ts ***!
  \***************************************************************/
/*! exports provided: FormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDialogComponent", function() { return FormDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var FormDialogComponent = /** @class */ (function () {
    function FormDialogComponent(data) {
        this.data = data;
    }
    FormDialogComponent.prototype.ngOnInit = function () {
    };
    FormDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-dialog',
            template: __webpack_require__(/*! ./form-dialog.component.html */ "./src/app/app-form/form-dialog/form-dialog.component.html"),
            styles: [__webpack_require__(/*! ./form-dialog.component.scss */ "./src/app/app-form/form-dialog/form-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], FormDialogComponent);
    return FormDialogComponent;
}());



/***/ }),

/***/ "./src/app/app-material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app-material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"]
            ],
            declarations: []
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_form_app_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-form/app-form.component */ "./src/app/app-form/app-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: 'app-form',
        pathMatch: 'full'
    },
    {
        path: 'app-form',
        component: _app_form_app_form_component__WEBPACK_IMPORTED_MODULE_2__["AppFormComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"art\"></header>\n<mat-toolbar-row id=\"app-toolbar\" class=\"mat-elevation-z1\">\n  <div>\n    <img class=\"logo mat-elevation-z1\" src=\"./assets/img/HSFCA_logo_rgb.jpg\" alt=\"logo\" />\n  </div>\n  <div fxFlex class=\"primary-header text-center\">\n    <h1>Hawai‘i State Foundation on Culture and the Arts\n      <br> Grants Management System</h1>\n  </div>\n  <mat-nav-list fxLayout=\"row\">\n    <a [matMenuTriggerFor]=\"programsMenu\" mat-list-item>\n      <mat-icon aria-label=\"List icon\">view_list</mat-icon>\n    </a>\n    <mat-menu #programsMenu=\"matMenu\" xPosition=\"before\">\n      <button routerLink=\"app-form\" mat-menu-item>Art Bento</button>\n      <button routerLink=\"app-form\" mat-menu-item>Artists in the Schools</button>\n      <button routerLink=\"app-form\" mat-menu-item>Biennium Grants</button>\n      <button routerLink=\"app-form\" mat-menu-item>Folk & Traditional Arts</button>\n      <button routerLink=\"app-form\" mat-menu-item>Poetry out Loud</button>\n    </mat-menu>\n    <a [matMenuTriggerFor]=\"profileMenu\" mat-list-item>\n      <mat-icon aria-label=\"Login icon\">lock</mat-icon>\n    </a>\n    <mat-menu #profileMenu=\"matMenu\" xPosition=\"before\">\n      <button routerLink=\"signup\" mat-menu-item>Sign up</button>\n      <button routerLink=\"login\" mat-menu-item>Log in</button>\n    </mat-menu>\n  </mat-nav-list>\n</mat-toolbar-row>\n<div>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_form_app_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-form/app-form.component */ "./src/app/app-form/app-form.component.ts");
/* harmony import */ var _app_form_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-form/form-dialog/form-dialog.component */ "./src/app/app-form/form-dialog/form-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _app_form_app_form_component__WEBPACK_IMPORTED_MODULE_7__["AppFormComponent"],
                _app_form_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FormDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [],
            entryComponents: [_app_form_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FormDialogComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aleks/Downloads/gms-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map