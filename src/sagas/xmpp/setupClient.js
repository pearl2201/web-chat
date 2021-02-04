process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import configureClient from '../../xmpp';
const { client, xml } = require('@xmpp/client');

function setupClient() {
    const xmpp = client({
        service: 'xmpp://localhost:5222',
        domain: 'localhost',
        resource: 'example',
        username: 'admin',
        password: 'passw0rd'
    });

    window.client = xmpp;
    configureClient(xmpp);

    xmpp.on('online', async () => {
        await xmpp.send(xml('presence'));
    });

    return xmpp;
}

export default setupClient;
