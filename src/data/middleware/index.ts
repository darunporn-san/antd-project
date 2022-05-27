export default function Middleware(store: any) {
    return (next: any) => (action: any) => {
        // tslint:disable-next-line:no-console
        console.log(`%c[ACTION]: ${action.type}`, 'background: #FFF6C6; color: green;')
        // tslint:disable-next-line:no-console
        console.log(`%c[DATA]: `, 'background: #FFF6C6; color: green;', action.payload)
        return next(action)
    }
}
