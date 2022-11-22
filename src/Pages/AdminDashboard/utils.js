export const getTodayDate = () => {
  const date = new Date();
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
};

export const activeCampaigns = (campaigns) => {
  return campaigns.filter(({ end_date }) => end_date >= getTodayDate()).length;
};

export const totalDonations = (donations) => {
  return donations.reduce((total, val) => total + val.amount, 0);
};

export const lastMonthDonation = (donations) => {
  const date = new Date(getTodayDate());
  let month = date.getMonth();
  let year = date.getFullYear();
  if (month == 0) {
    year = year - 1;
    month = 12;
  }
  let _date = year + "-" + month;

  return donations
    .filter(({ created_at }) => created_at.slice(0, 10).includes(_date) > 0)
    .reduce((total, val) => total + val.amount, 0);
};

export const currentMonthDonation = (donations) => {
  let _date = getTodayDate().slice(0, 7);

  return donations
    .filter(({ created_at }) => created_at.slice(0, 10).includes(_date) > 0)
    .reduce((total, val) => total + val.amount, 0);
};

export const usersPerRole = (userList) => {
  const roles = ["SuperAdmin", "Admin", "Manager"];
  let roleData = [0, 0, 0];
  roles.map((role, idx) => {
    let data = userList.filter((item) => item.role == role);
    roleData[idx] = data.length;
  });
  return roleData;
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const lastFewMonthsDonation = (donations) => {
  let _date = getTodayDate();
  let year = _date.substr(0, 4);
  let month = _date.substr(5, 2);

  let labels = [];
  let totalAmounts = [];

  for (let i = 0; i < 6; ++i) {
    let new_date = year + "-" + month;

    let total = donations
      .filter(
        ({ created_at }) => created_at.slice(0, 10).includes(new_date) > 0
      )
      .reduce((total, val) => total + val.amount, 0);

    labels.unshift(months[month - 1]);
    totalAmounts.unshift(total);

    month = month - 1;
    if (month == 0) {
      month = 12;
      year = year - 1;
    }
  }

  return { labels, totalAmounts };
};
