import { EventEmitter, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GLOBAL } from 'src/app/shop/constans/global';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm!: FormGroup;

  @Input()
  text = GLOBAL.EMPTY;

  @Output()
  onSearch = new EventEmitter();

  constructor(private readonly formBuild: FormBuilder) {
    this.searchForm = this.formBuild.group({
      search: [GLOBAL.EMPTY, Validators.required],
    })
  }

  ngOnInit(): void {
    this.searchForm.patchValue({ search: this.text });
  }

  onSubmit(): void {
    this.onSearch.emit(this.searchForm.value.search);
  }
}
