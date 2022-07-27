import { WomansService } from './../../core/services/womans/womans.service';
import { Component, OnInit } from '@angular/core';
import { IWoman } from './models/woman.models';
import { womans } from './woman-list.config';

@Component({
  selector: 'app-woman-list',
  templateUrl: './woman-list.component.html',
  styleUrls: ['./woman-list.component.scss'],
})
export class WomanListComponent implements OnInit {
  public womans?: IWoman[];
  public filteredWomans?: IWoman[];
  public canEdit: boolean = false;
  public filterValue: string = '';

  constructor(
    private womansService: WomansService
  ) {}

  ngOnInit(): void {
    this.womansService.getWomans().subscribe((womans) => {
      this.womans = womans;
      this.filteredWomans = womans;
    }
    );

  }

  public onEdit() {
    this.canEdit = !this.canEdit;
  }

  public onDelete(id: string) {
    this.womansService.deleteWoman(id).subscribe((woman) => {
      console.log('Delete', woman);
      //llamo a la función getWomans para traer a los personajes tras eliminar
      this.getWomans();
    });
  }

    public onFilter() {
      //filtramos los personajes según el nombre que escriba el usuario
      this.filteredWomans = this.womans?.filter((woman) => {
        return woman.name.toLowerCase().includes(this.filterValue.toLowerCase());
      });
    }
  
    //creo función para llamar de nuevo a la API cada vez que elimine personajes
    private getWomans() {
      this.womansService.getWomans().subscribe((womans) => {
        this.womans = womans;
        this.filteredWomans = womans;
      });
    }
  }