function Main() {
    return (
        <div className="container-fluid">
            <div className="container pic1">
                <div className="row mt-5">
                    <div className="col-12 mt-5">
                        <div className="row">
                            <div className="col-3">
                                <a className="text-danger text-start br1" href="#">D O M A   </a><br /> 
                                <span className="small">по суточная арендная жилья</span>
                            </div>

                            <div className="col-2">
                                <a className="text-white line br" href="#">ГЛАВНАЯ</a>
                            </div>
                            <div className="col-2">
                                <a className="text-white line br" href="#">О НАС</a>
                            </div>
                            <div className="col-2">
                                <a className="text-white line br" href="#">КОНТАКТЫ</a>
                            </div>

                            <div className="col-2 text-end">
                                <a className="line br" ><i class="fa-solid fa-right-to-bracket"></i> ВОЙТИ</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-5 pag">
                        <div className="row">

                            <form className="form-control">
                                <div className="col-12">
                                    <h3 className="head">Найдем, где остановится! </h3> <br />
                                    <p className="head1">Квартиры, отели, гостевые дома 3000 вариантов</p> <br />

                                </div>
                                <input className="form-control cont" type="text" placeholder="Куда едем" />
                                <br />
                                <input className="form-control cont" type="text" placeholder="Заезд - Отъезд" />
                                <br />
                                <div className="col">
                                    <button className="but col-12 border-0">Поиск</button>
                                </div>
                                <br />

                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 fixed">
                        <div className="row">
                            <div className="col-2 dot1">
                                <a href="#" className="line1">КОНТАКТЫ </a>
                            </div>
                            <div className="col-1 dot">
                                <i class="fa-solid fa-comment-dots fa"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}
export default Main;