import ActiveRecord from "./ActiveRecord"
import User from "./User"
const days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
export default class Registration extends ActiveRecord {
    constructor(registration) {
        super(registration, { user: User, updated_at: Date })
    }
    get day() {
        return days[this.created_at.getDay()]
    }
    get month() {
        return Registration.months[this.created_at.getMonth()]
    }
    static months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    static table = "registrations"
    static permit = ["updated_at"]
}