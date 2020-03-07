import { TablaComponent } from './../tabla/tabla.component';
import { PersonaService } from './../../../services/persona.service';
import { Component, OnInit, Host, Input, ViewChild, ElementRef } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private personaService: PersonaService, @Host() private tabla: TablaComponent) { }

  @Input() personaActual: Persona;

  @ViewChild('btnClose', {static: true}) btnClose: ElementRef;

  public isError = false;

  ngOnInit() {
  }

  onSave(formPersona: NgForm): void {
    if (formPersona.invalid) {
      this.isError = true;
    } else {
      if (formPersona.value.id === 0) {
        // Agregar
        this.add(formPersona.value);
      } else {
        this.update(formPersona.value);
      }
      this.btnClose.nativeElement.click();
    }
  }

  add(persona: Persona) {
    this.personaService.post(persona).subscribe(
      res => {
        this.tabla.personas.push(res);
      },
      err => {
        alert('Ocurrió un error al agregar la persona');
      }
    );
  }

  update(persona: Persona) {
    this.personaService.put(persona.id, persona).subscribe(
      res => {
        alert('Persona fue actualizada con éxito');
        const cambio = this.tabla.personas.filter( item => item.id !== persona.id);
        this.tabla.personas = cambio;
        this.tabla.personas.unshift(persona);
      },
      err => {
        alert('Ocurrió un error al actualizar persona');
      }
    );
  }

  onClose() {
    this.personaActual = {
      id: 0,
      nombre: '',
      apellido: '',
      dni: null
    };

    this.isError = false;
  }

  onCloseAlert() {
    this.isError = false;
  }

}
