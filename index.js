const { Plugin } = require('powercord/entities');

module.exports = class AOUUutilities extends Plugin {
    id;
    startPlugin() {
        powercord.api.commands.registerCommand({
            command: 'aou-ban',
            description: 'ban a user for a reason',
            usage: '{c} <id> <reason>',
            executor: (args) => {
            let id = args[0];
            args.shift();
            return {
                send: true,
                result: `<@850025674093494303> ban ${id} ${args.join(" ")}`
            }
            },
            autocomplete: (args) => {
                if (args[1] !== void 0) {
                    return {
                        header: 'reasons',
                        commands: [
                            {
                                command: "Scam; Your account may be hacked, please change your password.",
                                description: "discord/steam scam"
                            },
                            {
                                command: "NSFW",
                                description: "NSFW"
                            }
                        ]
                    };
                }
            }
          });
    }
    pluginWillUnload() {
        powercord.api.commands.unregisterCommand("aou-ban")
    }
};