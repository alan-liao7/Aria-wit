"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buttons_1 = require("../../classes/buttons");
const enums_1 = require("../../enums");
/**
 * Represents a GamePlay Button. Used to represent shape of Facebook API object. Type returned by builder and exposed to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/buttons/game-play
 */
class GamePlayButtonBuilder {
    constructor() {
        this._type = enums_1.BUTTON_TYPE.GAME_PLAY;
    }
    getType() {
        return this._type;
    }
    getGameMetadata() {
        return this._game_metadata;
    }
    setGameMetadata(value) {
        this._game_metadata = value;
        return this;
    }
    getPayload() {
        return this._payload;
    }
    setPayload(value) {
        this._payload = value;
        return this;
    }
    getTitle() {
        return this._title;
    }
    setTitle(value) {
        this._title = value;
        return this;
    }
    build() {
        return new buttons_1.GamePlayButton(this);
    }
}
exports.GamePlayButtonBuilder = GamePlayButtonBuilder;
//# sourceMappingURL=GamePlayButtonBuilder.js.map