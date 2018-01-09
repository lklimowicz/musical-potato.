insert into CLIENT (ID_CLIENT, NAME, SURNAME, PHONE) values
(1, 'Lukasz', 'Klimowicz', '678490246'),
(2, 'Andrzej', 'Piaseczny', '126577890'),
(3, 'Robert', 'Lewandowski', '999999999');

insert into GYM (ID_GYM, LOCALIZATION) values
(1, 'Maniac Gym'),
(2, 'Fitnes Gym');

insert into PERSONAL_TRAINER (ID_PERSONAL_TRAINER, NAME, SURNAME, PHONE, ID_GYM, ID_CLIENT) values
(1, 'Michal', 'Karmowski', '123654765', 1, 2),
(2, 'Robert', 'Burneika', '444657765', 2, 1);