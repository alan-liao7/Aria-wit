import { IGamePlayButton } from '../../interfaces';
import { BUTTON_TYPE } from '../../enums';
/**
 * Represents a GamePlay Button. Used to represent shape of Facebook API object. Type returned by builder and exposed to users to create
 * own object of proper shape if desired taking into account content restrictions for the object.
 *
 * Check link for content restrictions: https://developers.facebook.com/docs/messenger-platform/reference/buttons/game-play
 */
export declare class GamePlayButtonBuilder {
    private _type;
    private _game_metadata;
    private _payload;
    private _title;
    constructor();
    getType(): BUTTON_TYPE;
    getGameMetadata(): {
        player_id?: string;
        context_id?: string;
    };
    setGameMetadata(value: {
        player_id?: string;
        context_id?: string;
    }): this;
    getPayload(): string;
    setPayload(value: string): this;
    getTitle(): string;
    setTitle(value: string): this;
    build(): IGamePlayButton;
}
