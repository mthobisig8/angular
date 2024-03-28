import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../../service/data-transfer.service';
import { Registration } from '../../model/registration';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  constructor(private dataservice: DataTransferService) {}

  ngOnInit(): void {
    this.dataservice.registrationDetails$.subscribe((res) =>
      console.info(`info from service-${res.firstname}`)
    );
  }
}
