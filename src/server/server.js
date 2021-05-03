import { Server, Response } from "miragejs";
import jwt_encode from 'jwt-encode';
import jwt_decode from 'jwt-decode';

const users = [
    {
        id: 1,
        governorId: 123123,
        nickname: 'admin',
        password: '1234567',
        alliance: 'ND1',
        ordersToAlliances: [],
        email: 'guard_21@mail.ru'
    },
    {
        id: 2,
        governorId: 12312123123,
        nickname: 'moder',
        password: '1234567',
        alliance: 'ND0',
        ordersToAlliances: [],
        email: 'guard_21@mail.ru'
    }
];

const alliances = [
    {
        id: 1,
        tag: 'ND1',
        name: 'natural',
        description: 'Равным образом курс на социально-ориентированный национальный проект требует от нас системного анализа дальнейших направлений развитая системы массового участия. Задача организации, в особенности же повышение уровня гражданского сознания способствует повышению актуальности дальнейших направлений развитая системы массового участия. Таким образом, сложившаяся структура организации позволяет оценить значение всесторонне сбалансированных нововведений.',
        leader: 'admin',
        leaderId: 1,
        countMembers: 3,
        members: [users[0], users[1]]
    },
    {
        id: 2,
        tag: 'ND2',
        name: 'neuron',
        description: 'Равным образом курс на социально-ориентированный национальный проект требует от нас системного анализа дальнейших направлений развитая системы массового участия. Задача организации, в особенности же повышение уровня гражданского сознания способствует повышению актуальности дальнейших направлений развитая системы массового участия. Таким образом, сложившаяся структура организации позволяет оценить значение всесторонне сбалансированных нововведений.',
        leader: 'moder',
        leaderId: 2,
        countMembers: 0,
        members: []
    }
];

const orders = [
    {id: 1, idAlliance: 1, idUser: 3, nicknameUser: 'user'},
    {id: 2, idAlliance: 1, idUser: 4, nicknameUser: 'user1'},
    {id: 3, idAlliance: 1, idUser: 5, nicknameUser: 'user2'},
    {id: 4, idAlliance: 1, idUser: 6, nicknameUser: 'user3'},
    {id: 5, idAlliance: 1, idUser: 7, nicknameUser: 'user4'}
];

let i = 0;
const api = new Server({
    routes() {
        this.get('/login/', (schema, request) => {
            const { nickname, password } = request.sendArguments[0];
            const user = users.find(user => user.nickname === nickname && user.password === password);

            if(user) {
                const exp = Date.now() + 900000;
                const accessToken = jwt_encode({ id: user['id'], exp: exp, alliance: user['alliance'] }, 'wfawefawef');

                return new Response(200, { some: "header" }, { payload: { accessToken } });
            } else {
                return new Response(401);
            }
        });

        this.post('/login/', (schema, request) => {
            const { nickname } = request.sendArguments[0];
            const id = users.length + 1;

            if(!users.find(user => user.nickname === nickname)) {
                users.push({ ...request.sendArguments[0], id, alliance: null, ordersToAlliances: [] });
                return new Response(200, { some: "header" }, {})
            } else {
                return new Response(400);
            }
        });

        this.post('/alliance/', (schema, request) => {
            const nickname = jwt_decode(request.requestHeaders['Authorization'].split(' ')[1])['nickname'];
            const alliance = { id: alliances.length + 1,
                               ...request.sendArguments[0],
                               leader: nickname,
                               countMembers: 0,
                               members: [] };
            alliances.push(alliance);

            return {
                payload: {
                    ...alliance
                }
            };
        });

        this.patch('/alliance', (schema, request) => {
            let { id, tag, name, description } = request.sendArguments[0];
            id = id - 1;
            if(alliances[id]) {
                alliances[id]['tag'] = tag;
                alliances[id]['name'] = name;
                alliances[id]['description'] = description;
                return new Response(200);
            } else {
                return new Response(404);
            }
        });

        this.get('/users/user', (schema, request) => {
            const args = request.sendArguments[0];
            const user = users.find(user => user['id'] == args['id']);

            if(user) {
                return new Response(200, { some: "header"}, { payload: user });
            } else {
                return new Response(404, { some: "header"}, { payload: {} });
            }
        })

        this.get('/alliance/', (schema, request) => {
            const args = request.sendArguments[0];
            const approval = orders.filter(approval => {
                return approval.idAlliance == args['id'];
            });
            const alliance = { payload: { ...alliances[+args['id'] - 1], approval } };
            return alliances[args['id'] - 1] ? new Response(200, { some: "header" }, alliance) : new Response(404);
        });

        this.get('/alliances', (schema, request) => {
            return {
                payload: {
                    alliances
                }
            }
        });
        
        this.get('/tokens', (schema, request) => {
            const userData = jwt_decode(request.requestHeaders['Authorization'].split(' ')[1]);
            const exp = userData.exp = Date.now() + 900000;
            const x = request.requestHeaders.Authorization.split(' ')[1];

            if(x.length <= 5) return { payload: { exp: null, accessToken: null} };
            // i = i + 1;
            // if(i === 5) return { payload: { exp, accessToken: null} };
            
            return { payload: { exp, accessToken: jwt_encode(userData, 'wfawefawef')} };
        });
    }
});

export { api };