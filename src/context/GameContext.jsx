import React, { createContext, useContext, useState, useEffect } from 'react';

const GameContext = createContext();

const initialUserData = {
  username: "Anirudh",
  title: "Cyber Berserker",
  avatar: "",
  level: 8,
  xp: 3450,
  nextLevelXp: 5000,
  skillPoints: 2,
  attributes: {
    str: { value: 64, max: 100, label: "Strength", desc: "Resistance & Gym" },
    end: { value: 58, max: 100, label: "Endurance", desc: "Running & Cardio" },
    agi: { value: 72, max: 100, label: "Agility", desc: "Steps & Mobility" },
    vit: { value: 65, max: 100, label: "Vitality", desc: "Sleep & Hydration" }
  },
  stats: {
    streak: 12,
    totalWorkouts: 42,
    bossDamageDealt: 14250,
    caloriesBurned: 18400,
    stepsToday: 9420,
    sleepHours: 7.5,
    waterLitres: 2.8
  }
};

const initialQuests = [
  { id: 1, title: "Iron Forging", desc: "Complete 3 gym exercises or strength sets", xp: 250, progress: 2, target: 3, completed: false, category: "str" },
  { id: 2, title: "Cyber Sprint", desc: "Reach 10,000 daily steps", xp: 200, progress: 9420, target: 10000, completed: false, category: "agi" },
  { id: 3, title: "Hydration Protocol", desc: "Drink 3.0 Litres of water", xp: 150, progress: 2.8, target: 3.0, completed: false, category: "vit" }
];

const initialInventory = [
  { id: 1, name: "Neon Cyber Visor", type: "Helmet", rarity: "Epic", icon: "Glasses", equipped: true, stats: "+15 AGI" },
  { id: 2, name: "Titanium Power Plate", type: "Armor", rarity: "Legendary", icon: "Shield", equipped: true, stats: "+30 STR" },
  { id: 3, name: "Pulse Runner Boots", type: "Boots", rarity: "Rare", icon: "Zap", equipped: true, stats: "+20 END" },
  { id: 4, name: "Quantum Energy Blade", type: "Weapon", rarity: "Mythic", icon: "Sword", equipped: false, stats: "+50 DMG" },
  { id: 5, name: "Stamina Elixir x3", type: "Consumable", rarity: "Common", icon: "FlaskConical", equipped: false, stats: "+100 XP boost" }
];

const initialSkills = [
  { id: "str1", name: "Heavy Lifter", branch: "Strength", cost: 1, unlocked: true, desc: "+10% strength XP gain" },
  { id: "str2", name: "Power Surge", branch: "Strength", cost: 2, unlocked: false, desc: "Unlock critical damage in boss raids" },
  { id: "end1", name: "Marathon Spirit", branch: "Endurance", cost: 1, unlocked: true, desc: "+10% cardio efficiency" },
  { id: "end2", name: "Cardio Mastery", branch: "Endurance", cost: 2, unlocked: false, desc: "Reduce fatigue accumulation" },
  { id: "dis1", name: "Streak Shield", branch: "Discipline", cost: 1, unlocked: true, desc: "Protect streak once per week" },
  { id: "rec1", name: "Sleep Master", branch: "Recovery", cost: 1, unlocked: true, desc: "+15% VIT recovery rate" }
];

const initialBoss = {
  name: "THE IRON BEHEMOTH",
  maxHp: 50000,
  currentHp: 35750,
  level: 15,
  timeLeft: "3 Days 14 Hrs",
  image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
  party: [
    { name: "Anirudh (You)", damage: 14250, avatar: "" },
    { name: "ValkyrieX", damage: 11200, avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" },
    { name: "RoninFit", damage: 8400, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" },
    { name: "ByteLift", damage: 400, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" }
  ]
};

export const GameProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("questfit_user");
    return saved ? JSON.parse(saved) : initialUserData;
  });

  const [quests, setQuests] = useState(() => {
    const saved = localStorage.getItem("questfit_quests");
    return saved ? JSON.parse(saved) : initialQuests;
  });

  const [inventory, setInventory] = useState(() => {
    const saved = localStorage.getItem("questfit_inventory");
    return saved ? JSON.parse(saved) : initialInventory;
  });

  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem("questfit_skills");
    return saved ? JSON.parse(saved) : initialSkills;
  });

  const [boss, setBoss] = useState(() => {
    const saved = localStorage.getItem("questfit_boss");
    return saved ? JSON.parse(saved) : initialBoss;
  });

  const [workouts, setWorkouts] = useState(() => {
    const saved = localStorage.getItem("questfit_workouts");
    return saved ? JSON.parse(saved) : [
      { id: 1, type: "Strength", name: "Upper Body Hypertrophy", details: "Bench Press 80kg x 8, Pull-ups x 12", xp: 320, date: "Today" },
      { id: 2, type: "Cardio", name: "Night Cyber Run", details: "5.2 km in 28 mins", xp: 260, date: "Yesterday" }
    ];
  });

  const [notification, setNotification] = useState(null);

  useEffect(() => {
    localStorage.setItem("questfit_user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("questfit_quests", JSON.stringify(quests));
  }, [quests]);

  useEffect(() => {
    localStorage.setItem("questfit_inventory", JSON.stringify(inventory));
  }, [inventory]);

  useEffect(() => {
    localStorage.setItem("questfit_skills", JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem("questfit_boss", JSON.stringify(boss));
  }, [boss]);

  useEffect(() => {
    localStorage.setItem("questfit_workouts", JSON.stringify(workouts));
  }, [workouts]);

  const showNotification = (title, message, type = "success") => {
    setNotification({ title, message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  const addXp = (amount, attrKey = null) => {
    setUser(prev => {
      let newXp = prev.xp + amount;
      let newLevel = prev.level;
      let nextXp = prev.nextLevelXp;
      let newSkillPoints = prev.skillPoints;

      if (newXp >= nextXp) {
        newLevel += 1;
        newXp -= nextXp;
        nextXp = Math.floor(nextXp * 1.3);
        newSkillPoints += 1;
        showNotification("LEVEL UP!", `Congratulations! You reached Level ${newLevel}! +1 Skill Point`, "level");
      }

      let updatedAttrs = { ...prev.attributes };
      if (attrKey && updatedAttrs[attrKey]) {
        updatedAttrs[attrKey].value = Math.min(updatedAttrs[attrKey].max, updatedAttrs[attrKey].value + Math.ceil(amount / 50));
      }

      return {
        ...prev,
        xp: newXp,
        level: newLevel,
        nextLevelXp: nextXp,
        skillPoints: newSkillPoints,
        attributes: updatedAttrs
      };
    });
  };

  const logWorkout = (workoutData) => {
    const newW = {
      id: Date.now(),
      type: workoutData.type,
      name: workoutData.name,
      details: workoutData.details,
      xp: workoutData.xp || 300,
      date: "Today"
    };

    setWorkouts(prev => [newW, ...prev]);
    
    let attrKey = "str";
    if (workoutData.type === "Cardio") attrKey = "end";
    if (workoutData.type === "Mobility" || workoutData.type === "Steps") attrKey = "agi";
    
    addXp(newW.xp, attrKey);

    const dmg = workoutData.type === "Cardio" ? 300 : workoutData.type === "Strength" ? 500 : 200;
    setBoss(prev => {
      const newHp = Math.max(0, prev.currentHp - dmg);
      const updatedParty = prev.party.map(p => p.name.includes("You") ? { ...p, damage: p.damage + dmg } : p);
      return { ...prev, currentHp: newHp, party: updatedParty };
    });

    setUser(prev => ({
      ...prev,
      stats: {
        ...prev.stats,
        totalWorkouts: prev.stats.totalWorkouts + 1,
        bossDamageDealt: prev.stats.bossDamageDealt + dmg,
        caloriesBurned: prev.stats.caloriesBurned + (workoutData.calories || 300)
      }
    }));

    showNotification("Workout Logged!", `Successfully earned +${newW.xp} XP and dealt ${dmg} DMG to the boss!`);
  };

  const completeQuest = (questId) => {
    setQuests(prev => prev.map(q => {
      if (q.id === questId && !q.completed) {
        addXp(q.xp, q.category);
        showNotification("Quest Completed!", `Claimed reward: +${q.xp} XP`);
        return { ...q, completed: true, progress: q.target };
      }
      return q;
    }));
  };

  const unlockSkill = (skillId) => {
    const targetSkill = skills.find(s => s.id === skillId);
    if (!targetSkill || targetSkill.unlocked) return;

    if (user.skillPoints < targetSkill.cost) {
      showNotification("Insufficient Skill Points", "Level up to earn more skill points!", "error");
      return;
    }

    setUser(prev => ({ ...prev, skillPoints: prev.skillPoints - targetSkill.cost }));
    setSkills(prev => prev.map(s => s.id === skillId ? { ...s, unlocked: true } : s));
    showNotification("Skill Unlocked!", `Learned ${targetSkill.name}!`);
  };

  const toggleEquip = (itemId) => {
    setInventory(prev => prev.map(item => {
      if (item.id === itemId) {
        const newEq = !item.equipped;
        showNotification("Inventory Updated", `${item.name} ${newEq ? 'equipped' : 'unequipped'}`);
        return { ...item, equipped: newEq };
      }
      return item;
    }));
  };

  const resetDemoData = () => {
    setUser(initialUserData);
    setQuests(initialQuests);
    setInventory(initialInventory);
    setSkills(initialSkills);
    setBoss(initialBoss);
    setWorkouts([
      { id: 1, type: "Strength", name: "Upper Body Hypertrophy", details: "Bench Press 80kg x 8", xp: 320, date: "Today" }
    ]);
    localStorage.clear();
    showNotification("System Reset", "Demo data restored to initial state.");
  };

  return (
    <GameContext.Provider value={{
      user, setUser,
      quests, completeQuest,
      inventory, toggleEquip,
      skills, unlockSkill,
      boss,
      workouts, logWorkout,
      notification, showNotification,
      resetDemoData, addXp
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);