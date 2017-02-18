import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Proofer} from './proofer';
import {ProoferService} from './proofer.service';

@Component({
  moduleId: module.id,
  selector: 'my-proofers',
  templateUrl: './proofers.component.html',
  styleUrls: ['./proofers.component.css'],
  providers: [ProoferService]
})
export class ProofersComponent implements OnInit {
  proofers: Proofer[];
  selectedProofer: Proofer;

  constructor(private router: Router,
              private prooferService: ProoferService) {
  }

  delete(proofer: Proofer): void {
    this.prooferService
      .delete(proofer.id)
      .then(() => {
        this.proofers = this.proofers.filter(h => h !== proofer);
        if (this.selectedProofer === proofer) {
          this.selectedProofer = null;
        }
      });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.prooferService.create(name)
      .then(proofer => {
        this.proofers.push(proofer);
        this.selectedProofer = null;
      });
  }

  getProofers(): void {
    this.prooferService.getProofers().then(proofers => this.proofers = proofers);
  }

  ngOnInit(): void {
    this.getProofers();
  }

  onSelect(proofer: Proofer): void {
    this.selectedProofer = proofer;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProofer.id]);
  }
}

