import { useState } from 'react';
import { Plus, Minus, Trash2, Trophy, ChessKing } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ChessRankingDashboard = () => {
  const [players, setPlayers] = useState([]);
  const [newPlayerName, setNewPlayerName] = useState('');

  const addPlayer = () => {
    if (newPlayerName.trim()) {
      setPlayers([
        ...players,
        {
          id: Date.now(),
          name: newPlayerName,
          onlineWins: 0,
          onlineLosses: 0,
          physicalWins: 0,
          physicalLosses: 0,
        },
      ]);
      setNewPlayerName('');
    }
  };

  const removePlayer = (playerId) => {
    setPlayers(players.filter((player) => player.id !== playerId));
  };

  const updateStats = (playerId, platform, stat, increment) => {
    setPlayers(
      players.map((player) =>
        player.id === playerId
          ? {
              ...player,
              [`${platform}${stat}`]: Math.max(0, player[`${platform}${stat}`] + increment),
            }
          : player
      )
    );
  };

  const calculateWinRate = (wins, losses) => {
    const total = wins + losses;
    if (total === 0) return 0;
    return ((wins / total) * 100).toFixed(1);
  };

  const sortedPlayers = [...players].sort((a, b) => {
    const aTotal = a.onlineWins + a.physicalWins;
    const bTotal = b.onlineWins + b.physicalWins;
    return bTotal - aTotal;
  });

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ChessKing className="h-6 w-6" />
            Chess Rankings Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <Input
              placeholder="Enter player name"
              value={newPlayerName}
              onChange={(e) => setNewPlayerName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addPlayer()}
              className="max-w-xs"
            />
            <Button onClick={addPlayer}>Add Player</Button>
          </div>

          <Tabs defaultValue="rankings">
            <TabsList>
              <TabsTrigger value="rankings">Rankings</TabsTrigger>
              <TabsTrigger value="stats">Detailed Stats</TabsTrigger>
            </TabsList>

            <TabsContent value="rankings">
              <div className="grid gap-4">
                {sortedPlayers.map((player, index) => (
                  <Card key={player.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-2xl font-bold">#{index + 1}</div>
                          <div>
                            <h3 className="text-lg font-semibold">{player.name}</h3>
                            <div className="text-sm text-gray-500">
                              Total Wins: {player.onlineWins + player.physicalWins}
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => removePlayer(player.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="stats">
              <div className="grid gap-4">
                {sortedPlayers.map((player) => (
                  <Card key={player.id}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-semibold">{player.name}</h3>
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => removePlayer(player.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-medium">Chess.com Games</h4>
                          <div className="flex items-center gap-2">
                            <span className="text-green-600">Wins: {player.onlineWins}</span>
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() => updateStats(player.id, 'online', 'Wins', 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() => updateStats(player.id, 'online', 'Wins', -1)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-red-600">Losses: {player.onlineLosses}</span>
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() => updateStats(player.id, 'online', 'Losses', 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() => updateStats(player.id, 'online', 'Losses', -1)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="text-sm text-gray-500">
                            Win Rate: {calculateWinRate(player.onlineWins, player.onlineLosses)}%
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium">Physical Board Games</h4>
                          <div className="flex items-center gap-2">
                            <span className="text-green-600">Wins: {player.physicalWins}</span>
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() => updateStats(player.id, 'physical', 'Wins', 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() => updateStats(player.id, 'physical', 'Wins', -1)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-red-600">Losses: {player.physicalLosses}</span>
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() => updateStats(player.id, 'physical', 'Losses', 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() => updateStats(player.id, 'physical', 'Losses', -1)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="text-sm text-gray-500">
                            Win Rate: {calculateWinRate(player.physicalWins, player.physicalLosses)}%
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChessRankingDashboard;