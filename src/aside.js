const feather = require('feather-icons');
setTimeout(() => {
    feather.replace();
}, 1000);

const Aside = () => {
    return <aside>
        
<form>
    <h1>Iniciar sesión</h1>
        <div className="form-group">
            <label for="inputEmail"> <i data-feather="mail"></i>
            Email
            </label>
 <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
        </div>
<div className="form-group">
    <label for="inputPassword"> <i data-feather="lock"></i>
    Contraseña
    </label>
<input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
</div>
<div className="form-group">
    <label className="form-check-label"><input type="checkbox"/> Recuerdame siempre</label>
</div>
    <button type="submit" className="btn btn-primary">Iniciar sesion</button>
</form>
    </aside>;
}

export default Aside;