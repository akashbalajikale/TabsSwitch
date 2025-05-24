import { Injectable } from "@angular/core";
import { Iproduct } from "../models/products";

 


@Injectable({
    providedIn: "root"
})
 export class MobileService{

    MobilesArray : Array<Iproduct> = [{
        id: "67cfe4411d3eb582dacee84e",
        title: "Apple iPhone 11 Pro - 256GB - Gold",
        product_description: [
          "Pro camera system",
          "Expanded field of view",
          "Ultra HD video",
          "Night mode",
          "Super Retina XDR display",
          "Faster Face ID"
        ],
        rating: 4.4,
        reviews_count: 14850,
        images: ["https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTWBMREy1jDX3c6bqJrtQ85nhJqSkB0PH9GCcIx_7yJUyr2PqJsmGSLCU0PY5VUgYVsz-77eHLepSpY3Q2-ts-f3fivTCE7&usqp=CAY"],
        tags: [
          "Smartphone", "Dual SIM", "4G", "With Wireless Charging",
          "With Fast Charging", "Unlocked", "iOS", "GSM", "CDMA", "Facial Recognition"
        ],
        product_details: "iPhone 11 Pro. Just the right amount of everything...",
        return_policy: null,
        total_price: "$678.83",
        product_specifications: "No specification available.",
        category: "Mobiles",
        subcategory: "iPhones"
      }]
    constructor(){}

    fetchAllMObile():Array<Iproduct>{
        return this.MobilesArray
    }

 }