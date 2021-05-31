import { Component, OnInit, Input } from '@angular/core'
import { environment as env } from '@environments/environment'

@Component({
	selector: 'submit-button',
	templateUrl: './submit-button.component.html',
	styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent implements OnInit {
	@Input() public loading: string = 'false'
	@Input() public label: String
	@Input() public buttonClass: String = 'p-button-raised p-button-rounded'
	@Input() public iconPos: string = 'left'
	@Input() public type: string = 'submit'
	@Input() public disabled: string = 'false'
	@Input() public isCircle: string = 'false'
	@Input() public circleIcon: string = 'fas fa-eye'

	public loader: string = env.config.loader
	public _loading: boolean = false
	public _isCircle: boolean = false
	public _disabled: Boolean = false
	public _iconPos: string = 'p-button-icon-left'
	public _label: String = 'Guardar'

	constructor() { }

	ngOnInit(): void {
		this._iconPos = this.iconPos === 'left' ? 'p-button-icon-left' : 'p-button-icon-right'
		if ((/true/i).test(this.isCircle)) {
			this._label = ' '
		} else {
			this._label = this.label
		}
	}

	isLoadingClass(): boolean {
		return (/true/i).test(this.loading)
	}

	loadingClass() {
		this._loading = (/true/i).test(this.loading)
		return this._loading ? env.config.loadingButtonClass : ''
	}

	disablingClass() {
		this._disabled = (/true/i).test(this.disabled)
		return this._loading || this._disabled
	}

	get isCircleClass(): boolean {
		this._isCircle = (/true/i).test(this.isCircle)
		return this._isCircle
	}

	isCircleClassWithLoading(): boolean {
		this._loading = (/true/i).test(this.loading)
		this._isCircle = (/true/i).test(this.isCircle)
		return this._isCircle && !this._loading
	}
}