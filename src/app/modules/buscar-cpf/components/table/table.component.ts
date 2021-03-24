import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: Array<any>;
  constructor() { 
    this.data = [
      { tipo: 'TOKEN APLICATIVO', agencia: '1145', conta: '0091981', dac: '5', cpf: '25586600803', nSerie: '7000019893925', status: 'Cancelado', dataStatus:'25/09/2017', horaStatus: '17:59:01', idMobile: 'L5A4PGJSD3KY7MFXTK4PSIHPYGOSNNKVYOJ3JIOSP4ZMNONTUVAAAA', aplicativo: 'Aplicativo' },
      { tipo: 'TOKEN APLICATIVO', agencia: '1145', conta: '0091981', dac: '5', cpf: '25586600803', nSerie: '7000019893925', status: 'Cancelado', dataStatus:'25/09/2017', horaStatus: '17:59:01', idMobile: 'L5A4PGJSD3KY7MFXTK4PSIHPYGOSNNKVYOJ3JIOSP4ZMNONTUVAAAA', aplicativo: 'Aplicativo' },
      { tipo: 'TOKEN APLICATIVO', agencia: '1145', conta: '0091981', dac: '5', cpf: '25586600803', nSerie: '7000019893925', status: 'Cancelado', dataStatus:'25/09/2017', horaStatus: '17:59:01', idMobile: 'L5A4PGJSD3KY7MFXTK4PSIHPYGOSNNKVYOJ3JIOSP4ZMNONTUVAAAA', aplicativo: 'Aplicativo' },
      { tipo: 'TOKEN APLICATIVO', agencia: '1145', conta: '0091981', dac: '5', cpf: '25586600803', nSerie: '7000019893925', status: 'Cancelado', dataStatus:'25/09/2017', horaStatus: '17:59:01', idMobile: 'L5A4PGJSD3KY7MFXTK4PSIHPYGOSNNKVYOJ3JIOSP4ZMNONTUVAAAA', aplicativo: 'Aplicativo' },
      { tipo: 'TOKEN APLICATIVO', agencia: '1145', conta: '0091981', dac: '5', cpf: '25586600803', nSerie: '7000019893925', status: 'Cancelado', dataStatus:'25/09/2017', horaStatus: '17:59:01', idMobile: 'L5A4PGJSD3KY7MFXTK4PSIHPYGOSNNKVYOJ3JIOSP4ZMNONTUVAAAA', aplicativo: 'Aplicativo' },
      { tipo: 'TOKEN APLICATIVO', agencia: '1145', conta: '0091981', dac: '5', cpf: '25586600803', nSerie: '7000019893925', status: 'Cancelado', dataStatus:'25/09/2017', horaStatus: '17:59:01', idMobile: 'L5A4PGJSD3KY7MFXTK4PSIHPYGOSNNKVYOJ3JIOSP4ZMNONTUVAAAA', aplicativo: 'Aplicativo' },
      { tipo: 'TOKEN APLICATIVO', agencia: '1145', conta: '0091981', dac: '5', cpf: '25586600803', nSerie: '7000019893925', status: 'Cancelado', dataStatus:'25/09/2017', horaStatus: '17:59:01', idMobile: 'L5A4PGJSD3KY7MFXTK4PSIHPYGOSNNKVYOJ3JIOSP4ZMNONTUVAAAA', aplicativo: 'Aplicativo' },
  ];
  }

  ngOnInit(): void {
  }

}
