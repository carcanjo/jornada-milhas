import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrls: ['./seletor-passageiro.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // forwardRef indica que essa classe que vai ser usada não existe em tempo de compilação e vai ser usada depois
      useExisting: forwardRef(() => SeletorPassageiroComponent),
      //  multi: true quer dizer que esse componente pode ser usado em multiplos lugares
      multi: true
    }
  ]
})
  //ControlValueAccessor responsável para receber um controle (FormControl) de outro formulário
export class SeletorPassageiroComponent implements ControlValueAccessor {

  @Input() titulo: string = ''
  @Input() subtitulo: string = ''

  value: number = 0
  onChange = (val: number) => {

  }
  onTouch = () => {

  }

  writeValue(val: any): void {
    this.value = val
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }
  setDisabledState?(isDisabled: boolean): void {

  }

  incrementar () {
    this.value += 1
    this.onChange(this.value)
    this.onTouch()
  }

  decrementar () {
    if (this.value > 0) {
      this.value -= 1
      this.onChange(this.value)
      this.onTouch()
    }
  }
}
