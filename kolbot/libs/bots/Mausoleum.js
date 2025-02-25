/**
*	@filename	Mausoleum.js
*	@author		kolton
*	@desc		clear Mausoleum
*/

function Mausoleum() {
	Town.doChores();
	Pather.useWaypoint(3);
	Precast.doPrecast(true);

			Pather.teleport = false;
	if (!Pather.moveToExit(17, true)) {
		throw new Error("Failed to move to Burial Grounds");
	}

			Pather.teleport = true;
	if (Config.Mausoleum.KillBloodRaven) {
		Pather.moveToPreset(17, 1, 872);
		Attack.kill(getLocaleString(3111)); // Blood Raven
		Pickit.pickItems();
	}
	
	if (!Pather.moveToExit(19, true)) {
		throw new Error("Failed to move to Mausoleum");
	}

	Attack.clearLevel(Config.Mausoleum.ClearType);

	if (Config.Mausoleum.ClearCrypt) {
		// Crypt exit is... awkward
		if (!(Pather.moveToExit(17, true) && Pather.moveToPreset(17, 5, 6) && Pather.moveToExit(18, true))) {
			throw new Error("Failed to move to Crypt");
		}

		Attack.clearLevel(Config.ClearType);
	}

	return true;
}