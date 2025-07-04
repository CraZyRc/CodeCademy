// Win screen
class WinScene extends Phaser.Scene {
  constructor() {
    super({ key: 'WinScene' })
  }

  preload() {
    // Preload screen
    const baseURL = 'https://content.codecademy.com/courses/learn-phaser/fastfoodie/';
    this.load.image('win', `${baseURL}art/win_screen.png`);

    // Preload song
    this.load.audio('winTheme', [
      'https://content.codecademy.com/courses/learn-phaser/fastfoodie/audio/music/3-winTheme.ogg',
      'https://content.codecademy.com/courses/learn-phaser/fastfoodie/audio/music/3-winTheme.mp3'
    ]); // Credit: "Pixel Song #18" by hmmm101: https://freesound.org/people/hmmm101
  }

  create() {

    // Stop, reassign, and play the new music
    // gameState.currentMusic.stop();
    gameState.currentMusic = this.sound.add('winTheme');
    gameState.currentMusic.play({ loop: true });

    // Win screen text
    this.add.image(gameState.cam.midPoint.x, gameState.cam.midPoint.y, 'win').setOrigin(0.5).setScale(0.5);

    // Score text goes here

    // Prompt
    this.add.text(gameState.cam.midPoint.x, gameState.cam.midPoint.y + 300, 'Press enter to play again', { fontSize: '30px', fill: '#ffffff' }).setOrigin(0.5);

    // Define enter key again
    gameState.keys.Enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
  }

  update() {
    // Press Enter to start the game
    if (Phaser.Input.Keyboard.JustDown(gameState.keys.Enter)) {
      this.scene.stop('WinScene');
      this.scene.start('TutorialScene');
    }
  }
}