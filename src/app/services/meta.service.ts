import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class MetaService {

  constructor(private meta: Meta, private title: Title) { }

  setTitle(title: string) {
    this.title.setTitle(title);
  }

  addTags(tags: any) {
    this.meta.addTags(tags);
  }

  addTag(tag: any) {
    this.meta.addTags([tag]);
  }
}
