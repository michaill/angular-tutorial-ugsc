import { AfterViewInit, Directive, ElementRef, HostListener, Renderer2, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: 'textarea[appTextareaAutosize]',
  host: {
    class: 'textarea-autosize',
    rows: '1',
  }
})
export class TextareaAutosizeDirective implements AfterViewInit {
  private _previewElement: HTMLElement;

  @HostListener('input')
  onInput() {
    this.resizeToFitContent();
  }

  constructor(
    private textarea: ElementRef<HTMLTextAreaElement>,
    private renderer: Renderer2,
    private sanitizer: DomSanitizer
  ) {
    this._previewElement = this.renderer.createElement('div') as HTMLDivElement;
    this._previewElement.style.position = 'absolute';
    this._previewElement.style.height = '0px';
    this._previewElement.style.overflow = 'hidden';
    this._previewElement.style.wordWrap = 'break-word';
    this._previewElement.style.whiteSpace = 'pre-wrap';
    this._previewElement.style.zIndex = '-1000';
    this._previewElement.className = 'textarea-autosize'

    this.renderer.appendChild(this.textarea.nativeElement.parentElement, this._previewElement);
  }

  ngAfterViewInit() {
    this.resizeToFitContent();
  }

  private resizeToFitContent() {
    this.renderer.setProperty(
      this._previewElement,
      'innerHTML',
      this.sanitizer.sanitize(SecurityContext.HTML, this.textarea.nativeElement.value) + '&nbsp;'
    );

    this._previewElement.style.width = (this.textarea.nativeElement.clientWidth - 32) + 'px';
    this.textarea.nativeElement.style.height = this._previewElement.scrollHeight + 'px';

    this.renderer.setProperty(
      this._previewElement,
      'innerHTML',
      ''
    );
  }
}
