import { AbstractControl, FormControl } from "@angular/forms";

export class CustomValidators{

    public static humanName(control:FormControl){
         
       const regularExpression=new RegExp("^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$");
       return regularExpression.test(control.value)?null:{"error-404" : true};

    }

    //return condition
    public static myValidator(control:AbstractControl){
      
       return control.value > 100 ? null:{"tooExpensive":true};
    
    }
}