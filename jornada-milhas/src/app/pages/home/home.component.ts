import { Component, OnInit } from '@angular/core';
import { Promocao } from 'src/app/core/interface/Promocao';
import { PromocaoService } from 'src/app/core/services/promocao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  promocoes: Promocao[] = [];

  constructor(private promocaoService: PromocaoService) { }

  ngOnInit(): void {
    this.promocaoService.listar()
      .subscribe(
        resposta => {
          this.promocoes = resposta;
        }
    )
  }
}
