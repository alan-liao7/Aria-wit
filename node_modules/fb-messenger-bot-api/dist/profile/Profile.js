"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../util/Utils");
/**
 * Class used to set profile specific properties that are visible in Messenger such as Greeting Message, Get Started message
 * and Persistent Menu options.
 */
class Profile {
    /**
     * @param {string} token - Facebook Page Token
     * @param {ProxyData} proxyData - Proxy information if behind proxy
     */
    constructor(token, proxyData) {
        this.requestData = { token };
        this.requestData = Utils_1.Utils.getProxyData(this.requestData, proxyData);
    }
    /**
     * Method that sets the Greeting Message that is visible when new user first opens chat with bot before any messages
     * are sent.
     * @param greetingMessage - The message to be set
     * @param cb - Optional callback to get result of setting, promise returned otherwise
     * @return
     */
    setGreetingMessage(greetingMessage, cb) {
        const urlCrumb = 'me/thread_settings';
        const payload = { setting_type: 'greeting', greeting: { text: greetingMessage } };
        return this.sendConfigurationMessage(payload, urlCrumb, cb);
    }
    /**
     * Method that sets the Get Started button message that is visible when user first opens chat with bot before any messages
     * are sent.
     * @param getStartedPayload - The message to be set
     * @param cb - Optional callback to get result of settings, promise returned otherwise
     * @return
     */
    setGetStartedAction(getStartedPayload, cb) {
        const urlCrumb = 'me/thread_settings';
        const payload = { setting_type: 'call_to_actions', thread_state: 'new_thread',
            call_to_actions: [{ payload: getStartedPayload }] };
        return this.sendConfigurationMessage(payload, urlCrumb, cb);
    }
    /**
     * Method that sets the Persistent Menu options on the left side of the composer that is always visible.
     * @param menuEntries - Options that are to be set.
     * @param cb - Optional callback to get result of settings, promise returned otherwise
     * @return
     */
    setPersistentMenu(menuEntries, cb) {
        const urlCrumb = 'me/messenger_profile';
        const payload = { setting_type: 'call_to_actions', thread_state: 'existing_thread',
            persistent_menu: [{ locale: 'default', call_to_actions: menuEntries }] };
        return this.sendConfigurationMessage(payload, urlCrumb, cb);
    }
    sendConfigurationMessage(payload, urlCrumb, cb) {
        const options = Utils_1.Utils.getRequestOptions();
        options.url += urlCrumb;
        options.method = 'POST';
        options.json = payload;
        return Utils_1.Utils.sendMessage(options, this.requestData, cb);
    }
}
exports.Profile = Profile;
//# sourceMappingURL=Profile.js.map