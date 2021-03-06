import { Component, OnInit, Host, ViewChild, Input, ElementRef } from '@angular/core';
import { TablaReactivoComponent } from '../tabla-reactivo/tabla-reactivo.component';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent implements OnInit {

  constructor(private personaService: PersonaService, @Host() private tabla: TablaReactivoComponent, private formBuilder: FormBuilder) { }

  @Input() set personaActual(valor) {
    this.onBuild();
    if (valor) {
      this.personaOrignal = valor;
      this.edit = true;
      this.formPersona.patchValue({
        id: valor.id,
        nombre: valor.nombre,
        apellido: valor.apellido,
        dni: valor.dni
      });
    }
  }

  @ViewChild('btnClose', {static: true}) btnClose: ElementRef;

  public formPersona: FormGroup;
  public personaOrignal: any;
  public edit = false;
  public isError = false;

  ngOnInit() {
    this.onBuild();
  }

  onBuild() {
    this.formPersona = this.formBuilder.group({
      id: new FormControl(0),
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      dni: new FormControl(null, [Validators.required, Validators.pattern('[0-9]{1,8}')])
    });
  }

  onSave(formPersona: FormGroup): void {
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
