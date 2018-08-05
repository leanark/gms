import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tile } from '../shared/models/tile.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.scss']
})
export class AppFormComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Art Bento', cols: 1, rows: 1, color: '#FB8C00'},
    {text: 'Artists in the Schools', cols: 1, rows: 1, color: '#FF9800'},
    {text: 'Biennium Grants', cols: 1, rows: 1, color: '#FFA726'},
    {text: 'Folk & Traditional Arts', cols: 1, rows: 1, color: '#FFB74D'},
    {text: 'Poetry out Loud', cols: 1, rows: 1, color: '#FFCC80'}
  ];

  selectedTile: Tile = this.tiles[2];

  isLinear = false;
  formGroupA: FormGroup;
  formGroupB: FormGroup;
  formGroupC: FormGroup;
  formGroupD: FormGroup;
  formGroupE: FormGroup;
  formGroupF: FormGroup;
  
  helpGroupA: any;
  helpGroupB: any;
  helpGroupC: any;
  helpGroupD: any;
  helpGroupE: any;
  helpGroupF: any;


  constructor(private fb: FormBuilder, public dialog: MatDialog, private http: HttpClient) {}

  ngOnInit() {

    this.getJSON('./assets/json/A.json').subscribe(result => {
      this.helpGroupA = result;
    });

    this.getJSON('./assets/json/B.json').subscribe(result => {
      this.helpGroupB = result;
    });

    this.getJSON('./assets/json/C.json').subscribe(result => {
      this.helpGroupC = result;
    });

    this.getJSON('./assets/json/D.json').subscribe(result => {
      this.helpGroupD = result;
    });

    this.getJSON('./assets/json/E.json').subscribe(result => {
      this.helpGroupE = result;
    });

    this.getJSON('./assets/json/F.json').subscribe(result => {
      this.helpGroupF = result;
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
      services: this.fb.array([ this.createService() ]),
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
      personnelCosts: this.fb.array([ this.createPersonnelCost() ]),
      nonEmployeeCosts: this.fb.array([ this.createNonEmployeeCost() ]),
      otherExpenses: this.fb.group({
        spaceRentals: this.fb.array([ this.createSpaceRental() ]),
        travel: this.fb.group({
          transportation: this.fb.array([ this.createTransportation() ]),
          perDiem: this.fb.array([ this.createPerDiemOrOther() ]),
          other: this.fb.array([ this.createPerDiemOrOther() ]),
        }),
        marketing: this.fb.array([ this.createMarketing() ]),
        remainingOperatingExpenses: this.fb.group ({
          suppliesAndMaterials: this.fb.array([ this.createSuppliesAndMaterial() ]),
          otherExpenses: this.fb.array([ this.createOtherExpense() ])
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

  }

  //=========== formGroupD =============//

  createService(): FormGroup {
    return this.fb.group({
      activity: [''],
      personnel: [''],
      startDate: [''],
      endDate: [''],
      location: ['']
    });
  }

  //=========== formGroupE =============//

  createPersonnelCost(): FormGroup {
    return this.fb.group({
      type: [''],
      numberOfPersons: [''],
      rateOfPay: [''],
      numberOfHours: [''],
      totalCashExpenses: [''],
      sfcaShare: [''],
      inKindValue: ['']
    })
  }

  createNonEmployeeCost(): FormGroup {
    return this.fb.group({
      type: [''],
      numberOfPersons: [''],
      rateOfPay: [''],
      numberOfHours: [''],
      totalCashExpenses: [''],
      sfcaShare: [''],
      inKindValue: ['']
    })
  }

  createSpaceRental(): FormGroup {
    return this.fb.group ({
      rental: [''],
      totalCashExpenses: [''],
      sfcaShare: [''],
      inKindValue: ['']
    }) 
  }

  createTransportation(): FormGroup {
    return this.fb.group({
      numberOfPersons: [''],
      from: [''],
      to: [''],
      totalCashExpenses: [''],
      sfcaShare: [''],
      inKindValue: ['']
    })
  }

  createPerDiemOrOther(): FormGroup {
    return this.fb.group({
      numberOfPersons: [''],
      rate: [''],
      days: [''],
      totalCashExpenses: [''],
      sfcaShare: [''],
      inKindValue: ['']
    })
  }

  createMarketing(): FormGroup {
    return this.fb.group({
      marketing: [''],
      totalCashExpenses: [''],
      sfcaShare: [''],
      inKindValue: ['']
    })
  }

  createSuppliesAndMaterial(): FormGroup {
    return this.fb.group({
      suppliesAndMaterial: [''],
      totalCashExpenses: [''],
      sfcaShare: [''],
      inKindValue: ['']
    })
  }

  createOtherExpense(): FormGroup {
    return this.fb.group({
      otherExpense: [''],
      totalCashExpenses: [''],
      sfcaShare: [''],
      inKindValue: ['']
    })
  }

  createTotals(): FormGroup {
     return this.fb.group({
       totalCashExpenses: [''],
       sfcaShare: [''],
       inKindValue: ['']
     })
  }

  //=========== formGroupF =============//

  createAdmissions(): FormGroup {
    return this.fb.group({
      numberOfPersons: [''],
      fee: [''],
      totalFee: [''],
      per: [''],
      revenue: ['']
    })
  }

  createRevenue(): FormGroup {
    return this.fb.group({
      name: [''],
      revenue: ['']
    })
  }

  onSelectTile(tile) {
    this.selectedTile = tile;
    console.log(this.selectedTile);
  }

  openHelp(helpGroup) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = helpGroup;
    
    const dialogRef = this.dialog.open(FormDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {

    })
  }

  public getJSON(filePath): Observable<any> {
    return this.http.get(filePath);
  }
}