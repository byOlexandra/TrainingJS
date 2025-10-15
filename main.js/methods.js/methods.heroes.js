const heroes = [
    {
        appearance: {
            eyeColor: 'Brown',
            gender: 'Male',
            hairColor: 'Auburn',
            height: ["6'2'", '188 cm'],
            race: null,
            weight: ['200 lb', '90 kg'],
        },
        biography: {
            aliases: ['Stargod', 'Vanwolf', 'Skywolf'],
            alignment: 'good',
            alterEgos: 'No alter egos found.',
            firstAppearance:
                'AMAZING SPIDER-MAN #1, (as Man-Wolf) AMAZING SPIDER-MAN #124',
            fullName: 'John Jameson',
            placeOfBirth: 'New York, New York',
            publisher: 'Marvel Comics',
        },
        connections: {
            groupAffiliation:
                'Ravencroft Insitute Staff, Avengers Support Crew, NASA, USAF',
            relatives:
                'J. Jonah (father), Joan (mother, deceased), Marla Madison (stepmother), David (paternal grandfather, presumed deceased), Betty (paternal grandmother, presumed deceased)',
        },
        id: 429,
        images: {
            lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/429-man-wolf.jpg',
            md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/429-man-wolf.jpg',
            sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/429-man-wolf.jpg',
            xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/429-man-wolf.jpg',
        },
        name: 'Man-Wolf',
        powerstats: {
            combat: 70,
            durability: 42,
            intelligence: 63,
            power: 45,
            speed: 35,
            strength: 44,
        },
        slug: '429-man-wolf',
        work: {
            base: 'Queens',
            occupation:
                'Employed by Dept. of Social Services, Queens; former astronaut, test pilot, security chief for Ravenscroft Institute',
        },
    },
    {
        appearance: {
            eyeColor: 'White',
            gender: 'Female',
            hairColor: 'Orange',
            height: ["6'4", '193 cm'],
            race: 'Alien',
            weight: ['218 lb', '98 kg'],
        },
        biography: {
            aliases: ['-'],
            alignment: 'good',
            alterEgos: 'No alter egos found.',
            firstAppearance: 'The Order #4',
            fullName: 'Ardina',
            placeOfBirth: '-',
            publisher: 'Marvel Comics',
        },
        connections: {
            groupAffiliation: '-',
            relatives: 'Norrin Radd (Silver Surfer, clonal source), Clea (creator)',
        },
        id: 42,
        images: {
            lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/42-ardina.jpg',
            md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/42-ardina.jpg',
            sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/42-ardina.jpg',
            xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/42-ardina.jpg',
        },
        name: 'Ardina',
        powerstats: {
            combat: 25,
            durability: 80,
            intelligence: 63,
            power: 100,
            speed: 100,
            strength: 100,
        },
        slug: '42-ardina',
        work: {
            base: '-',
            occupation: '-',
        },
    },
    {
        appearance: {
            eyeColor: 'Blue',
            gender: 'Male',
            hairColor: 'Black',
            height: ["5'5", '165 cm'],
            race: 'Human',
            weight: ['125 lb', '56 kg'],
        },
        biography: {
            aliases: ['Alvin Draper', 'Batman', 'Robin', 'Timothy Wayne'],
            alignment: 'good',
            alterEgos: 'Red Robin',
            firstAppearance: 'Batman #436 (August, 1989)',
            fullName: 'Tim Drake',
            placeOfBirth: '-',
            publisher: 'Red Robin',
        },
        connections: {
            groupAffiliation:
                'Teen Titans, Batman Family, Batman Inc., Wayne Enterprises; formerly Young Justice',
            relatives:
                'Jack Drake (father, deceased), Janet Drake (mother, deceased), Dana Winters Drake (step-mother, status unknown), Bruce Wayne (Batman, adoptive father), Damian Wayne (Robin V, adoptive brother), Dick Grayson (Robin I, adoptive brother), Jason Todd (Robin II, adoptive brother), Cassandra Cain (Batgirl IV, adoptive sister)',
        },
        id: 563,
        images: {
            lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/563-robin-iii.jpg',
            md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/563-robin-iii.jpg',
            sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/563-robin-iii.jpg',
            xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/563-robin-iii.jpg',
        },
        name: 'Robin III',
        powerstats: {
            combat: 85,
            durability: 28,
            intelligence: 81,
            power: 29,
            speed: 27,
            strength: 11,
        },
        slug: '563-robin-iii',
        work: {
            base: 'Gotham City; Titans Tower, San Francisco',
            occupation: 'High School Student',
        },
    },
    {
        appearance: {
            eyeColor: '-',
            gender: 'Female',
            hairColor: 'Blond',
            height: ['-', '0 cm'],
            race: null,
            weight: ['- lb', '0 kg'],
        },
        biography: {
            aliases: ['-'],
            alignment: 'good',
            alterEgos: 'No alter egos found.',
            firstAppearance: 'No Ordinary Family S01E01 (2010)',
            fullName: 'Stephanie Powell',
            placeOfBirth: '-',
            publisher: 'ABC Studios',
        },
        connections: {
            groupAffiliation: '-',
            relatives:
                'Jim Powell (husband), Daphne Powell (daughter), JJ Powell (son)',
        },
        id: 636,
        images: {
            lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/636-stephanie-powell.jpg',
            md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/636-stephanie-powell.jpg',
            sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/636-stephanie-powell.jpg',
            xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/636-stephanie-powell.jpg',
        },
        name: 'Stephanie Powell',
        powerstats: {
            combat: 10,
            durability: 10,
            intelligence: 69,
            power: 24,
            speed: 54,
            strength: 10,
        },
        slug: '636-stephanie-powell',
        work: {
            base: '-',
            occupation: 'Executive Vice President of Research at Global Tech',
        },
    },
    {
        appearance: {
            eyeColor: 'Blue',
            gender: 'Male',
            hairColor: 'Black',
            height: ["5'9", '175 cm'],
            race: 'Human',
            weight: ['165 lb', '74 kg'],
        },
        biography: {
            aliases: ['Captain Marvel Jr.', 'CM3'],
            alignment: 'good',
            alterEgos: 'No alter egos found.',
            firstAppearance:
                'Current incarnation: (As Freddy Freeman) The Power of Shazam #3 (May, 1995)',
            fullName: 'Frederick Christopher Freeman',
            placeOfBirth: '-',
            publisher: 'DC Comics',
        },
        connections: {
            groupAffiliation: 'Marvel Family, formerly Outsiders and Teen Titans.',
            relatives:
                'parents, deceased, Jacob Freeman (granfather, deceased), Timothy Karnes (Sabbac, foster brother, deceased)',
        },
        id: 158,
        images: {
            lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/158-captain-marvel-ii.jpg',
            md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/158-captain-marvel-ii.jpg',
            sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/158-captain-marvel-ii.jpg',
            xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/158-captain-marvel-ii.jpg',
        },
        name: 'Captain Marvel II',
        powerstats: {
            combat: 56,
            durability: 90,
            intelligence: 75,
            power: 34,
            speed: 27,
            strength: 81,
        },
        slug: '158-captain-marvel-ii',
        work: {
            base: 'Primarily Fawcett City.',
            occupation: 'Adventurer',
        },
    },
    {
        appearance: {
            eyeColor: 'Brown',
            gender: 'Male',
            hairColor: 'Grey',
            height: ["6'4", '193 cm'],
            race: 'Cyborg',
            weight: ['395 lb', '178 kg'],
        },
        biography: {
            aliases: ['Demolisher'],
            alignment: 'good',
            alterEgos: 'No alter egos found.',
            firstAppearance: 'Astonishing Tales #25 (August, 1974)',
            fullName: 'Luther Manning',
            placeOfBirth: '-',
            publisher: 'Marvel Comics',
        },
        connections: {
            groupAffiliation:
                "Former member of the CIA, Project: Alpha-Mech, US Army, ally of Godwulf's Redeemers",
            relatives: 'Janice (Wife, seperated), Richard (son)',
        },
        id: 215,
        images: {
            lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/215-deathlok.jpg',
            md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/215-deathlok.jpg',
            sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/215-deathlok.jpg',
            xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/215-deathlok.jpg',
        },
        name: 'Deathlok',
        powerstats: {
            combat: 60,
            durability: 70,
            intelligence: 69,
            power: 40,
            speed: 30,
            strength: 32,
        },
        slug: '215-deathlok',
        work: {
            base: 'New York area',
            occupation: '-',
        },
    },
    {
        appearance: {
            eyeColor: '-',
            gender: 'Male',
            hairColor: '-',
            height: ['-', '0 cm'],
            race: null,
            weight: ['- lb', '0 kg'],
        },
        biography: {
            aliases: ['Cape'],
            alignment: 'good',
            alterEgos: 'No alter egos found.',
            firstAppearance: 'The Cape S01E01 (2011)',
            fullName: 'Vince Faraday',
            placeOfBirth: '-',
            publisher: null,
        },
        connections: {
            groupAffiliation: '-',
            relatives: 'Trip Faraday (son), Dana Thompson-Faraday (wife)',
        },
        id: 656,
        images: {
            lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/656-the-cape.jpg',
            md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/656-the-cape.jpg',
            sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/656-the-cape.jpg',
            xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/656-the-cape.jpg',
        },
        name: 'The Cape',
        powerstats: {
            combat: 64,
            durability: 32,
            intelligence: 38,
            power: 22,
            speed: 23,
            strength: 10,
        },
        slug: '656-the-cape',
        work: {
            base: '-',
            occupation: '-',
        },
    },
    {
        appearance: {
            eyeColor: 'Blue',
            gender: 'Female',
            hairColor: 'Blond',
            height: ["5'5", '165 cm'],
            race: 'Human',
            weight: ['125 lb', '56 kg'],
        },
        biography: {
            aliases: ['Spider-Woman'],
            alignment: 'good',
            alterEgos: 'No alter egos found.',
            firstAppearance: 'Edge of Spider-Verse #2',
            fullName: 'Gwen Stacy',
            placeOfBirth: '-',
            publisher: 'Marvel Comics',
        },
        connections: {
            groupAffiliation:
                'Warriors of the Great Web; formerly Mary Janes, Spider-Army',
            relatives: 'George Stacy (father), Helen Stacy (mother, deceased)',
        },
        id: 619,
        images: {
            lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/619-spider-gwen.jpg',
            md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/619-spider-gwen.jpg',
            sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/619-spider-gwen.jpg',
            xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/619-spider-gwen.jpg',
        },
        name: 'Spider-Gwen',
        powerstats: {
            combat: 70,
            durability: 70,
            intelligence: 75,
            power: 66,
            speed: 63,
            strength: 55,
        },
        slug: '619-spider-gwen',
        work: {
            base: '-',
            occupation: '-',
        },
    },
    {
        appearance: {
            eyeColor: 'Grey',
            gender: 'Male',
            hairColor: 'Black',
            height: ["6'2", '188 cm'],
            race: 'Human',
            weight: ['180 lb', '81 kg'],
        },
        biography: {
            aliases: [
                'Sorcerer Supreme',
                'Master of the Mystic Arts',
                'Stephen Sanders',
                'Captain Universe',
                'Vincent Stevens',
            ],
            alignment: 'good',
            alterEgos: 'No alter egos found.',
            firstAppearance: 'Strange Tales #110 (July, 1963)',
            fullName: 'Stephen Strange',
            placeOfBirth: 'Philadelphia, Pennsylvania',
            publisher: 'Marvel Comics',
        },
        connections: {
            groupAffiliation:
                'Defenders, underground Avengers; formerly the Order, Midnight Sons; former disciple of the Ancient One',
            relatives:
                'Eugene (father, deceased), Beverly (mother, deceased), Victor (Khiron, brother, apparently deceased), Donna (sister, deceased), Clea (wife, estranged), Umar (mother-in-law), Orini (father-in-law), Dormammu (uncle-in-law)',
        },
        id: 226,
        images: {
            lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/226-doctor-strange.jpg',
            md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/226-doctor-strange.jpg',
            sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/226-doctor-strange.jpg',
            xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/226-doctor-strange.jpg',
        },
        name: 'Doctor Strange',
        powerstats: {
            combat: 60,
            durability: 84,
            intelligence: 100,
            power: 100,
            speed: 12,
            strength: 10,
        },
        slug: '226-doctor-strange',
        work: {
            base: '-',
            occupation: 'Sorcerer Supreme, retired neurosurgeon',
        },
    },
    {
        appearance: {
            eyeColor: 'Bown',
            gender: 'Male',
            hairColor: 'Black',
            height: ['-', '0 cm'],
            race: 'Human',
            weight: ['- lb', '0 kg'],
        },
        biography: {
            aliases: ['Green Lantern', 'White Lantern'],
            alignment: 'good',
            alterEgos: 'No alter egos found.',
            firstAppearance: 'The New 52: FCBD Special Edition #1 (June, 2012)',
            fullName: 'Simoon Baz',
            placeOfBirth: 'Dearborn, Michigan',
            publisher: 'DC Comics',
        },
        connections: {
            groupAffiliation: '-',
            relatives:
                'Sira Baz (sister), Farid Amar (nephew), Nazir Amar (brother in-law)',
        },
        id: 600,
        images: {
            lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/600-simon-baz.jpg',
            md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/600-simon-baz.jpg',
            sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/600-simon-baz.jpg',
            xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/600-simon-baz.jpg',
        },
        name: 'Simon Baz',
        powerstats: {
            combat: 60,
            durability: 55,
            intelligence: 56,
            power: 100,
            speed: 42,
            strength: 90,
        },
        slug: '600-simon-baz',
        work: {
            base: '-',
            occupation: '-',
        },
    },
    {
        appearance: {
            eyeColor: '-',
            gender: 'Female',
            hairColor: '-',
            height: ['-', '0 cm'],
            race: null,
            weight: ['- lb', '0 kg'],
        },
        biography: {
            aliases: ['-'],
            alignment: 'good',
            alterEgos: 'No alter egos found.',
            firstAppearance: 'Heroes S02E04 - The Kindness of Strangers',
            fullName: 'Monica Dawson',
            placeOfBirth: '-',
            publisher: 'NBC - Heroes',
        },
        connections: {
            groupAffiliation: '-',
            relatives:
                'Nana Dawson (Grandmother), Damon (brother), DL Hawkins (cousin), Niki Sanders (cousin-in-law once removed), Micah Sanders (second cousin)',
        },
        id: 469,
        images: {
            lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/469-monica-dawson.jpg',
            md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/469-monica-dawson.jpg',
            sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/469-monica-dawson.jpg',
            xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/469-monica-dawson.jpg',
        },
        name: 'Monica Dawson',
        powerstats: {
            combat: 90,
            durability: 14,
            intelligence: 50,
            power: 48,
            speed: 35,
            strength: 10,
        },
        slug: '469-monica-dawson',
        work: {
            base: 'New Orleans, LA',
            occupation: 'Fast food service',
        },
    },
    {
        appearance: {
            eyeColor: 'Brown',
            gender: 'Male',
            hairColor: 'Brown',
            height: ["6'1", '185 cm'],
            race: 'Human',
            weight: ['180 lb', '81 kg'],
        },
        biography: {
            aliases: ['Bucket-Head', 'Edge-Man', 'Powell'],
            alignment: 'good',
            alterEgos: 'No alter egos found.',
            firstAppearance: 'Darkhawk #1 (March, 1991)',
            fullName: 'Christopher Powell',
            placeOfBirth: 'Queens, New York',
            publisher: 'Marvel Comics',
        },
        connections: {
            groupAffiliation:
                'formerly Loners, New Warriors, Avengers West Coast (reservist), Secret Defenders (founder)',
            relatives:
                'Michael Powell (father), Grace Powell (mother), Jonathon and Jason Powell (brothers)',
        },
        id: 202,
        images: {
            lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/202-darkhawk.jpg',
            md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/202-darkhawk.jpg',
            sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/202-darkhawk.jpg',
            xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/202-darkhawk.jpg',
        },
        name: 'Darkhawk',
        powerstats: {
            combat: 64,
            durability: 70,
            intelligence: 50,
            power: 74,
            speed: 33,
            strength: 32,
        },
        slug: '202-darkhawk',
        work: {
            base: 'Los Angeles, California; formerly New York City and Avengers Compound',
            occupation: 'Retired Superhero',
        },
    },
    {
        appearance: {
            eyeColor: 'Brown',
            gender: 'Male',
            hairColor: 'Brown',
            height: ["5'4", '163 cm'],
            race: null,
            weight: ['124 lb', '56 kg'],
        },
        biography: {
            aliases: ['Max'],
            alignment: 'good',
            alterEgos: 'No alter egos found.',
            firstAppearance: 'New X-Men: Academy X #1',
            fullName: 'Maxwell Jordan',
            placeOfBirth: '-',
            publisher: 'Marvel Comics',
        },
        connections: {
            groupAffiliation: 'Corsairs',
            relatives: '-',
        },
        id: 537,
        images: {
            lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/537-quill.jpg',
            md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/537-quill.jpg',
            sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/537-quill.jpg',
            xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/537-quill.jpg',
        },
        name: 'Quill',
        powerstats: {
            combat: 14,
            durability: 14,
            intelligence: 38,
            power: 23,
            speed: 12,
            strength: 10,
        },
        slug: '537-quill',
        work: {
            base: 'X-Mansion',
            occupation: '-',
        },
    },
    {
        appearance: {
            eyeColor: '-',
            gender: 'Male',
            hairColor: '-',
            height: ['-', '0 cm'],
            race: null,
            weight: ['- lb', '0 kg'],
        },
        biography: {
            aliases: ['-'],
            alignment: 'good',
            alterEgos: 'No alter egos found.',
            firstAppearance: 'Darkman (August 24, 1990)',
            fullName: 'Peyton Westlake',
            placeOfBirth: '-',
            publisher: 'Universal Studios',
        },
        connections: {
            groupAffiliation: '-',
            relatives: 'Julie Hastings (girlfriend)',
        },
        id: 203,
        images: {
            lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/203-darkman.jpg',
            md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/203-darkman.jpg',
            sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/203-darkman.jpg',
            xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/203-darkman.jpg',
        },
        name: 'Darkman',
        powerstats: {
            combat: 28,
            durability: 85,
            intelligence: 75,
            power: 12,
            speed: 23,
            strength: 14,
        },
        slug: '203-darkman',
        work: {
            base: '-',
            occupation: 'Scientist',
        },
    },
    {
        appearance: {
            eyeColor: 'Green',
            gender: 'Female',
            hairColor: 'Blond',
            height: ["5'10", '178 cm'],
            race: 'Human',
            weight: ['120 lb', '54 kg'],
        },
        biography: {
            aliases: ['Felicity Harmon'],
            alignment: 'good',
            alterEgos: 'No alter egos found.',
            firstAppearance: 'Amazing Spider-Man #194 (July, 1979)',
            fullName: 'Felicia Hardy',
            placeOfBirth: 'Queens, New York',
            publisher: 'Marvel Comics',
        },
        connections: {
            groupAffiliation: 'Formerly Heroes for Hire',
            relatives: 'Walter Hardy (father, deceased), Lydia Hardy (mother)',
        },
        id: 99,
        images: {
            lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/99-black-cat.jpg',
            md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/99-black-cat.jpg',
            sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/99-black-cat.jpg',
            xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/99-black-cat.jpg',
        },
        name: 'Black Cat',
        powerstats: {
            combat: 70,
            durability: 10,
            intelligence: 75,
            power: 23,
            speed: 33,
            strength: 16,
        },
        slug: '99-black-cat',
        work: {
            base: '-',
            occupation:
                "Cat burglar; Private investigator, founder of Cat's Eye Investigations.",
        },
    },
    {
        appearance: {
            eyeColor: 'Blue',
            gender: 'Male',
            hairColor: 'Blond',
            height: ['-', '0 cm'],
            race: 'Human',
            weight: ['- lb', '0 kg'],
        },
        biography: {
            aliases: [
                'Time Lord',
                'Time Master',
                'Boppy',
                'Dr. Hunter',
                'Mr',
                'Hunter',
                'Carter',
            ],
            alignment: 'good',
            alterEgos: 'No alter egos found.',
            firstAppearance: 'Showcase #20',
            fullName: 'Richard Hunter',
            placeOfBirth: '-',
            publisher: 'DC Comics',
        },
        connections: {
            groupAffiliation:
                'Formerly leader of the Time Masters; former member of the Forgotten Heroes; former member of the Linear Men, Booster Gold International (BGI)',
            relatives:
                'Michael Carter, (Booster Gold, father), Unknown (mother), Jonar Carter (grandfather), Ellen Carter (grandmother, deceased), Michelle Carter (Goldstar) (aunt), Daniel Carter (21st century ancestor), Rose Levin (ancestor), Dan Hunter (cousin),',
        },
        id: 559,
        images: {
            lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/559-rip-hunter.jpg',
            md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/559-rip-hunter.jpg',
            sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/559-rip-hunter.jpg',
            xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/559-rip-hunter.jpg',
        },
        name: 'Rip Hunter',
        powerstats: {
            combat: 25,
            durability: 10,
            intelligence: 100,
            power: 100,
            speed: 8,
            strength: 8,
        },
        slug: '559-rip-hunter',
        work: {
            base: 'Time Lab, Arizona',
            occupation: '-',
        },
    },
    {
        appearance: {
            eyeColor: 'Black',
            gender: 'Female',
            hairColor: 'Black',
            height: ["5'8", '173 cm'],
            race: 'Talokite',
            weight: ['120 lb', '54 kg'],
        },
        biography: {
            aliases: ['-'],
            alignment: 'good',
            alterEgos: 'No alter egos found.',
            firstAppearance: 'Adventure Comics #365',
            fullName: 'Tasmia Mallor',
            placeOfBirth: 'Talok VIII',
            publisher: 'DC Comics',
        },
        connections: {
            groupAffiliation: '-',
            relatives: '-',
        },
        id: 585,
        images: {
            lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/585-shadow-lass.jpg',
            md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/585-shadow-lass.jpg',
            sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/585-shadow-lass.jpg',
            xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/585-shadow-lass.jpg',
        },
        name: 'Shadow Lass',
        powerstats: {
            combat: 80,
            durability: 20,
            intelligence: 63,
            power: 79,
            speed: 67,
            strength: 10,
        },
        slug: '585-shadow-lass',
        work: {
            base: '-',
            occupation: '-',
        },
    },
    {
        appearance: {
            eyeColor: 'Yellow',
            gender: 'Male',
            hairColor: 'Indigo',
            height: ["5'9'", '175 cm'],
            race: null,
            weight: ['195 lb', '88 kg'],
        },
        biography: {
            aliases: ['-'],
            alignment: 'good',
            alterEgos: 'No alter egos found.',
            firstAppearance: 'GIANT-SIZE X-MEN #1',
            fullName: 'Kurt Wagner',
            placeOfBirth: 'Somewhere in the Bavarian Alps',
            publisher: 'Marvel Comics',
        },
        connections: {
            groupAffiliation: 'X-Men, formerly Excalibur',
            relatives:
                'Eric Wagner (father, deceased), Margali Szardos (foster mother), Jimaine Szardos (Daytripper, alias Amanda Sefton, foster sister), Stefan Szardos (foster brother, deceased), Mystique (mother), Graydon Creed (half-brother, deceased).',
        },
        id: 490,
        images: {
            lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/490-nightcrawler.jpg',
            md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/490-nightcrawler.jpg',
            sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/490-nightcrawler.jpg',
            xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/490-nightcrawler.jpg',
        },
        name: 'Nightcrawler',
        powerstats: {
            combat: 80,
            durability: 14,
            intelligence: 50,
            power: 76,
            speed: 47,
            strength: 10,
        },
        slug: '490-nightcrawler',
        work: {
            base: 'Xavier Institute for Higher Learning, Salem Center, Westchester County, New York (former) Muir Island, Scotland; Braddock Lighthouse',
            occupation: 'Adventurer, Teacher',
        },
    },
    {
        appearance: {
            eyeColor: 'Green',
            gender: 'Female',
            hairColor: 'Brown',
            height: ['-', '0 cm'],
            race: 'Human',
            weight: ['- lb', '0 kg'],
        },
        biography: {
            aliases: ['Green Lantern', 'Power Ring'],
            alignment: 'good',
            alterEgos: 'No alter egos found.',
            firstAppearance: 'Green Lantern Vol 5 #20 (July, 2013)',
            fullName: 'Jessica Cruz',
            placeOfBirth: '-',
            publisher: 'DC Comics',
        },
        connections: {
            groupAffiliation: '-',
            relatives: 'Sara Cruz (sister)',
        },
        id: 360,
        images: {
            lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/360-jessica-cruz.jpg',
            md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/360-jessica-cruz.jpg',
            sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/360-jessica-cruz.jpg',
            xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/360-jessica-cruz.jpg',
        },
        name: 'Jessica Cruz',
        powerstats: {
            combat: 55,
            durability: 50,
            intelligence: 56,
            power: 100,
            speed: 46,
            strength: 90,
        },
        slug: '360-jessica-cruz',
        work: {
            base: '-',
            occupation: '-',
        },
    },
    {
        appearance: {
            eyeColor: 'Blue',
            gender: 'Male',
            hairColor: 'No Hair',
            height: ["6'1", '185 cm'],
            race: 'Ungaran',
            weight: ['200 lb', '90 kg'],
        },
        biography: {
            aliases: ['Lagzia'],
            alignment: 'good',
            alterEgos: 'No alter egos found.',
            firstAppearance: 'Showcase #22 (October, 1959)',
            fullName: '',
            placeOfBirth: 'Ungara',
            publisher: 'DC Comics',
        },
        connections: {
            groupAffiliation: 'Green Lantern Corps, Black Lantern Corps',
            relatives:
                'Amon Sur (son), Arin Sur (sister), Thaal Sinestro (brother-in-law), Soranik Natu (niece)',
        },
        id: 3,
        images: {
            lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/3-abin-sur.jpg',
            md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/3-abin-sur.jpg',
            sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/3-abin-sur.jpg',
            xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/3-abin-sur.jpg',
        },
        name: 'Abin Sur',
        powerstats: {
            combat: 65,
            durability: 64,
            intelligence: 50,
            power: 99,
            speed: 53,
            strength: 90,
        },
        slug: '3-abin-sur',
        work: {
            base: 'Oa',
            occupation: 'Green Lantern, former history professor',
        },
    },
];
// Напиши функцію, яка приймає масив героїв та повертає масив імен усіх героїв.
function names(arr) {
    return arr.map(hero => hero.name);
}
console.log(names(heroes));

// Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких gender дорівнює 'Male'.
function genderMale(heroes) {
    return heroes.filter(hero => hero.appearance.gender === "Male")
}
console.log(genderMale(heroes));

// Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких eyeColor дорівнює 'Blue'.
function blueEyes(arr) {
    return arr.filter(hero => hero.appearance.eyeColor === "Blue");
}
console.log(blueEyes(heroes));

// Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких hairColor дорівнює 'Black'.
const blackHair = arr => {
    return arr.filter(hero => hero.appearance.hairColor === "Black");
}
console.log(blackHair(heroes));

// Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких powerstats.power більше ніж 80.
function powerSt(arr) {
    return arr.filter(hero => hero.powerstats.power > 80);
}
console.log(powerSt(heroes));

// Напиши функцію, яка приймає масив героїв та повертає героя з name рівним 'Doctor Strange'.
function findHero(arr, name) {
    return arr.find(hero => hero.name === name);
}
console.log(findHero(heroes, 'Doctor Strange'));

// Напиши функцію, яка приймає масив героїв та повертає героя з максимальним значенням powerstats.strength.
function findMax(arr) {
    return arr.reduce((maxHero, hero) => {
        return hero.powerstats.strength > maxHero.powerstats.strength ? hero : maxHero;
}, arr[0]);
}
console.log(findMax(heroes));

// Напиши функцію, яка приймає масив героїв та повертає героя з мінімальним значенням powerstats.speed.
function findMin(arr) {
    return arr.reduce((minHero, hero) => {
        return hero.powerstats.speed < minHero.powerstats.speed ? hero : minHero;
    }, arr[0])
}
console.log(findMin(heroes));

// Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких appearance.weight[1] менше 75 кг.
function findSlim(arr) {
    return arr.filter(hero => {
        const weight = parseInt(hero.appearance.weight[1]);
        return weight < 75;
    })
}
console.log(findSlim(heroes));

// Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких appearance.height[1] більше 180 см.
function higher(arr) {
    return arr.filter(hero => {
        const height = parseInt(hero.appearance.height[1]);
        return height > 180;
    })
}
console.log(higher(heroes));

// Напиши функцію, яка приймає масив героїв та повертає масив назв biography.firstAppearance усіх героїв.
function biographyNames(arr) {
    return arr.map(hero => hero.biography.firstAppearance);
}
console.log(biographyNames(heroes));    

// Напиши функцію, яка приймає масив героїв та повертає масив назв work.occupation усіх героїв.
function workWhere(arr) {
    return arr.map(hero => hero.work.occupation)
}
console.log(workWhere(heroes));

// Напиши функцію, яка приймає масив героїв та сортує його за зростанням powerstats.intelligence.
function sortedup(arr) {
    return arr.toSorted((a, b) => a.powerstats.intelligence - b.powerstats.intelligence)
}
console.log(sortedup(heroes));

// Напиши функцію, яка приймає масив героїв та сортує його за спаданням powerstats.power.
function sortedDown(arr) {
    return arr.toSorted((a, b) => b.powerstats.power - a.powerstats.power)
}
console.log(sortedDown(heroes));

// Напиши функцію, яка приймає масив героїв та сортує його за алфавітом по name.
function sortedAlphabet(arr) {
    return arr.toSorted((a, b) => a.name.localeCompare(b.name))
}
console.log(sortedAlphabet(heroes));

// Напиши функцію, яка приймає масив героїв та перевіряє, чи є хоча б один герой з alignment рівним 'bad'.
function ifBad(arr) {
    return arr.some(hero => hero.biography.alignment === "bad")
}
console.log(ifBad(heroes));

// Напиши функцію, яка приймає масив героїв та перевіряє, чи всі герої мають alignment рівним 'good'.
function ifGood(arr) {
    return arr.every(hero => hero.biography.alignment === "good")
}
console.log(ifGood(heroes));

// Напиши функцію, яка приймає масив героїв та перевіряє, чи є хоча б один герой з powerstats.intelligence рівним 100.
function ifHundred(arr) {
    return arr.some(hero => hero.powerstats.intelligence === 100);
}
console.log(ifHundred(heroes));

// Напиши функцію, яка приймає масив героїв та перевіряє, чи всі герої мають race, відмінний від null.
function ifRace(arr) {
    return arr.every(hero => hero.appearance.race !== null)
}
console.log(ifRace(heroes));

// Напиши функцію, яка приймає масив героїв та перевіряє, чи є хоча б один герой вагою більше ніж 150 кг.
function ifMore150(arr) {    
    return arr.some(hero => {
        const w = parseInt(hero.appearance.weight[1])
        return w > 150
    })
}
console.log(ifMore150(heroes));

// Напиши функцію, яка приймає масив героїв та повертає індекс героя з id рівним 226.
function getIndex(arr, index) {
    return arr.findIndex(hero => hero.id === index)
}
console.log(getIndex(heroes, 226));

// Напиши функцію, яка приймає масив героїв та повертає масив довжин масиву aliases кожного героя.
function findLength(arr) {
        return arr.map(hero => hero.biography.aliases.length)
}
console.log(findLength(heroes));






