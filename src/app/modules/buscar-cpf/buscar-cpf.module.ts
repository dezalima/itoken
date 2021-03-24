import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarCpfRoutingModule } from './buscar-cpf-routing.module';
import { BuscarCpfComponent } from './buscar-cpf.component';
import { HeaderModule } from 'src/app/ui/header/header.module';
import { SubMenuModule } from 'src/app/ui/sub-menu/sub-menu.module';
import { TitleSectionModule } from 'src/app/ui/title-section/title-section.module';
import { CardHabilitacaoModule } from './components/card-habilitacao/card-habilitacao.module';
import { StatusCardsModule } from 'src/app/ui/status-cards/status-cards.module';
import { TableModule } from './components/table/table.module';
import { PaginationModule } from 'src/app/ui/pagination/pagination.module';


@NgModule({
  declarations: [BuscarCpfComponent],
  imports: [
    CommonModule,
    BuscarCpfRoutingModule,
    HeaderModule,
    SubMenuModule,
    TitleSectionModule,
    CardHabilitacaoModule,
    StatusCardsModule,
    TableModule,
    PaginationModule

  ]
})
export class BuscarCpfModule { }
