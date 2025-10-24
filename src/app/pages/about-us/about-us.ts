import { Component } from '@angular/core';
import { DetallesService } from '../detalles/detalles.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  imports: [ReactiveFormsModule],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {}
