import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [BarcodeScanner]
})
export class HomePage {
qrData: any;
createdCode: any;
scannedCode: any;
  constructor(private barcodeScanner: BarcodeScanner, public navCtrl:NavController) {

  }

  createCode() {
  //console.log("Inside createCode");
  this.createdCode = this.qrData;
  }

  ScanCode() {
  this.barcodeScanner.scan().then(barcodeData => {
  this.scannedCode = barcodeData.text;
})
  }

}
