import { Component, OnInit } from '@angular/core';
import { LegalReferenceType } from '../../model/legal-reference';
import { NgFor } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataTransferService } from '../../service/data-transfer.service';
import { Registration } from '../../model/registration';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, RouterLink],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit {
  registrationDetails = new FormGroup({
    firstname: new FormControl<string>(''),
    lastname: new FormControl<string>(''),
    type: new FormControl<LegalReferenceType>(LegalReferenceType.ID),
    value: new FormControl<string>(''),
  });

  legalReferencetypes: LegalReferenceType[] = [
    LegalReferenceType.ID,
    LegalReferenceType.PASSPORT,
    LegalReferenceType.TAXNUMBER,
  ];

  constructor(private dataService: DataTransferService) {}

  ngOnInit(): void {}

  onSubmit() {
    var data: Registration = {
      firstname: this.registrationDetails.controls.firstname.value!,
      lastname: this.registrationDetails.controls.lastname.value!,
      dob: null,
      legalReference: {
        type: this.registrationDetails.controls.type.value!,
        value: this.registrationDetails.controls.value.value!,
      },
    };
    this.dataService.sendData(data);
    console.log(this.registrationDetails.controls);
  }
}
