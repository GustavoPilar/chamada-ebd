using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChamadaEBD.BackEnd.Migrations
{
    /// <inheritdoc />
    public partial class updateCheckins : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "HasClass",
                table: "TeacherCheckins",
                newName: "Attendance");

            migrationBuilder.AddColumn<bool>(
                name: "Attendance",
                table: "StudentCheckins",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Attendance",
                table: "StudentCheckins");

            migrationBuilder.RenameColumn(
                name: "Attendance",
                table: "TeacherCheckins",
                newName: "HasClass");
        }
    }
}
