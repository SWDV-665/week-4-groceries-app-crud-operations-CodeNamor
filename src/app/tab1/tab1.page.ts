import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public alertController: AlertController) {}

  title = "Grocery";

  items = [
    {
      name: "Milk",
      quantity: "1"
    },
    {
      name: "Eggs",
      quantity: "Dozen"
    },
    {
      name: "Orange Juice",
      quantity: "1"
    },
    {
      name: "Avacado",
      quantity: "3"
    },
  ];

  addItem() {
    console.log("Adding Item:")
    this.showItemPromt();
  }

  async showItemPromt() {
    const alert = await this.alertController.create({
      header: 'Add item',
      message: "Please enter Item Content",
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          type: 'text',
          placeholder: 'quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: item => {
            console.log('Confirm Ok', item);
            this.items.push(item);
          }
        }
      ]
    });

    await alert.present();
  }

  async removeItem(item, index) {
    console.log("Removing Item - ", item, index);

    this.items.splice(index, 1)
  }
}
