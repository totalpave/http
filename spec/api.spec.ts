
import * as api from '../src/api';
import {HTTPMethod} from '../src/HTTPMethod';
import {HTTPStatus} from '../src/HTTPStatus';

describe('Public API', () => {
    it('HTTPMethod', () => {
        expect(api.HTTPMethod).toBe(HTTPMethod);
    });

    it('HTTPStatus', () => {
        expect(api.HTTPStatus).toBe(HTTPStatus);
    });
});
