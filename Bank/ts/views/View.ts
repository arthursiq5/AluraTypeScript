/**
 * @namespace ts/views/View
 * @exports View
 */
export abstract class View<T>{
  /** @var JQuery _div */
  protected _div: JQuery;

  /** @var boolean escapar */
  protected _escapar: boolean;

  /**
   * @access public
   * @param string idElemento
   */
  constructor(idElemento:string, escapar: boolean = false){
    this._div = $(idElemento);
    this._escapar = escapar;
  }

  /**
   * @access public
   * @description atualiza tela
   * @param T model
   * @return void
   */
  update(model: T): void{
    let template = this.template(model);

    if(this._escapar)
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');

    this._div.html(template);
  }

  /**
   * @abstract
   * @access public
   * @description produz template da tela
   * @param T model
   * @return string
   */
  abstract template(model: T):string;
}
