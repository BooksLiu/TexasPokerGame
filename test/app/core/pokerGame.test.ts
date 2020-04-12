import { PokerGame, EGameStatus } from '../../../src/app/core/PokerGame';
// @ts-ignore
import { expect } from 'chai';
import { IPlayer } from '../../../src/app/core/Player';

describe('test/app/core/pokerGame.test.ts', () => {
  const users: IPlayer[] = [
    {
      userId: '1',
      counter: 200,
    },
    {
      userId: '2',
      counter: 200,
    },
    {
      userId: '3',
      counter: 50,
    },
    {
      userId: '4',
      counter: 400,
    },
    {
      userId: '5',
      counter: 1200,
    },
  ];

  /**
   * game ready
   */
  it('game init', async () => {
    const game = new PokerGame({
      smallBlind: 1,
      users,
    });
    game.play();
    expect(game.status).to.equal(EGameStatus.GAME_ACTION);
    console.log(game.currPlayer, 'currPlayer');
    expect(game.currPlayer.node.actionSize).to.equal(0);
    expect(game.pot).to.equal(3);
    expect(game.pot).to.equal(3);
    expect(game.playerLink.getNode(1).node.actionSize).to.equal(1);
  });

  /**
   * game playing
   */
  it('game play', async () => {
    const game = new PokerGame({
      smallBlind: 1,
      users,
    });
    game.play();
    console.log(game.currPlayer.node.handCard)
    game.action('call');
    game.action('call');
    game.action('call');
    game.action('call');
    game.action('check');
    game.sendCard();
    console.log(game.status, '------a');
    console.log(game.currPlayer, '------b')
    game.action('raise:10');
    game.action('raise:20');
    game.action('call');
    game.action('call');
    game.action('raise:40');
    game.action('call');
    game.action('call');
    game.action('call');
    game.action('call');
    game.sendCard();
    console.log(game.status, '------c');
    console.log(game.currPlayer, '------c')
    game.action('allin');
    game.action('allin');
    game.action('allin');
    game.action('allin');
    game.action('allin');
    console.log(game.status, '---------b')
    // game.action('raise:10');
    console.log(game.commonCard);
    console.log(game.pot);
    console.log(game.getPlayers());
  });
  // flop
  // turn
  // river
  // chip in
    // has Allin need separate pot
      // many allin

  /**
   * game over
   */
  it('game over', async () => {
    // only one player
      // last player, other player fold

    // many player
      // last player, has all in player
      // all player all in
        // one player all in
        // many player all in
    // other pots
  });
  /**
   * count
   */
  it('count', async () => {

  });
  // has other pot
});
